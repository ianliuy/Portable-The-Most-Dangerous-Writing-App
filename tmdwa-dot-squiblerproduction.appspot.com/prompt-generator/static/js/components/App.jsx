import React from 'react';
import classNames from 'classnames';
import Fullscreen from "react-full-screen";

import Progress from './Progress';
import WordCount from './WordCount';
import WriteButton from './WriteButton';
import Failure from './Failure';
import Export from './Export';
import Loader from './Loader';
import Editor from './Editor';
import {AppContext} from './AppContext';
import SegmentTracker from './SegmentTracking';

export default class WritingApp extends React.Component {
  constructor(props) {
    super(props);

    let {limit, type, hardcore} = this.props;

    this.handleStroke = this.handleStroke.bind(this);

    this.reset = this.reset.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.toggleNightMode = this.toggleNightMode.bind(this);
    this.now = this.now.bind(this);
    this.editor = React.createRef();
    this.toggleExport = this.toggleExport.bind(this);
    this.renderExportMenu = this.renderExportMenu.bind(this);

    this.trackExport = (params={}) => {
      this.segmentTracker.trackEvent('Export', params);
    };

    const startExportingProcess = () => {
      this.setState({exportingProcess: true})
    };

    const finishExportingProcess = () => {
      this.setState({exportingProcess: false})
    };

    this.state = {
      run: false,
      startTime: null,
      fullscreen: false,
      nightMode: localStorage.getItem("mdwa.night-mode") === "true",
      progress: 0,
      timeSinceStroke: 0,
      danger: false,
      won: false,
      lost: false,
      fade: 2,
      kill: 5,
      limit: limit,
      type: type,
      hardcore: hardcore,
      text: localStorage.getItem("promptContent") || "",
      exportHiden: true,
      trackExport: this.trackExport,
      exportingProcess: false,
      startExportingProcess: startExportingProcess,
      finishExportingProcess: finishExportingProcess
    };

    this.segmentTracker = new SegmentTracker(window);
  }

  startWriting() {
    this.setState({
      run: true,
      startTime: this.now(),
      timerID: setInterval(() => this.tick(), 100),
    })
  }

  toggleNightMode() {
    const { nightMode } = this.state;
    localStorage.setItem("mdwa.night-mode", !nightMode);
    this.setState((prevState, props) => ({ nightMode: !prevState.nightMode }));
    this.segmentTracker.trackEvent(`Night Mode - ${(nightMode ? "OFF" : "ON")}`);
  }

  toggleFullscreen() {
    const { fullscreen } = this.state;
    this.setState((prevState, props) => ({ fullscreen: !prevState.fullscreen }));
    this.segmentTracker.trackEvent(`Full Screen - ${(fullscreen ? "OFF" : "ON")}`);
  }

  handleStroke(char, text) {
    if (!this.state.run && !this.state.won) this.startWriting();
    this.toggleDanger(false);
    const words = text.trim().length && text.trim().split(/\s+/).length;
    this.setState({
      text,
      words,
      timeSinceStroke: 0
    });
  }

  stopWriting() {
    clearInterval(this.state.timerID);
  }

  toggleDanger(on) {
    if (this.state.danger === on) return;
    this.setState({danger: on});
  }

  now() {
    return new Date().getTime() / 1000;
  }

  win() {
    this.stopWriting();
    this.setState({
      won: true,
      run: false
    });
    this.segmentTracker.trackEvent('User win');
  }

  fail() {
    this.stopWriting();
    this.setState({lost: true});
    this.segmentTracker.trackEvent('Failure');
  }

  reset(type, limit, hardcore) {
    this.setState({
      type,
      limit,
      hardcore,
      won: false,
      lost: false,
      run: false,
      startTime: null,
      progress: 0,
      timeSinceStroke: 0,
      danger: false,
      words: 0
    });
    this.editor.current && this.editor.current.reset();
  }

  tick() {
    const {
      run,
      words,
      timeSinceStroke,
      startTime,
      fade,
      type,
      limit,
      kill,
    } = this.state;
    if (!run) return;
    const danger = timeSinceStroke >= fade;
    if (timeSinceStroke >= kill) return this.fail();
    const duration = this.now() - startTime;
    const progress = (type === "minutes" ? duration / 60.0 : words) / limit;
    if (progress >= 1) this.win();

    this.setState((prevState, props) => ({
      words,
      progress,
      danger,
      timeSinceStroke: prevState.timeSinceStroke + 0.1
    }));
  }

  toggleExport() {
    this.setState({ exportHiden: !this.state.exportHiden })
  }

  renderExportMenu(text) {
    const { exportHiden } = this.state;
    const appClass = classNames('export', {
      'hide': exportHiden,
    });
    return (
      <div className={appClass}>
        <Export text={text} fromPage="From Editor Page"/>
      </div>
    )
  }

  render() {
    const {
      fullscreen,
      danger,
      won,
      lost,
      text,
      nightMode,
      limit,
      type,
      hardcore
    } = this.state;
    const appClass = classNames('app', {
      'night-mode': nightMode,
      danger: danger
    });

    return (
      <Fullscreen enabled={fullscreen} >
        <AppContext.Provider value={this.state}>
          <div className={appClass} >
            <Failure/>
            <Progress />
            <Loader />
            <div className="buttons">
              {won && <button onClick={this.toggleExport} className="tiny light ghost">Export</button>}
              <i className="icon-night-mode" onClick={this.toggleNightMode}></i>
              <i className="icon-fullscreen" onClick={this.toggleFullscreen}></i>
            </div>
            {this.renderExportMenu(text)}
            {!lost && (
              <div className="content">
                <Editor
                  ref={this.editor}
                  won={won}
                  onStroke={this.handleStroke}
                  onNightMode={this.toggleNightMode}
                  onFullScreen={this.toggleFullscreen}
                  text={text}
                />
                {
                  won
                  ? <WriteButton small ghost hidePanel label="Start Again" {...{limit, type, hardcore}} />
                  : <WordCount />
                }
              </div>
            )}
          </div>
        </AppContext.Provider>
      </Fullscreen>
    );
  }
}
