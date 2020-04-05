import React from 'react';
import { Link } from "react-router-dom";
import SegmentTracker from './SegmentTracking';
var classNames = require('classnames');

export default class WriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hardcore: this.props.hardcore || false,
      limit: this.props.limit || 5,
      type: this.props.type || "minutes",
      compact: true,
      hidePanel: this.props.hidePanel
    };

    this.onExpand = this.onExpand.bind(this);
    this.setLimit = this.setLimit.bind(this);
    this.setType = this.setType.bind(this);
    this.toggleHardcore = this.toggleHardcore.bind(this);
    this.showPanel = this.showPanel.bind(this);
    this.hideChooser = this.hideChooser.bind(this);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.trackStartWriting = this.trackStartWriting.bind(this);

    this.segmentTracker = new SegmentTracker(window);
  }

  trackStartWriting() {
    const { label, rootPageName } = this.props;
    const { limit, hardcore, type } = this.state;
    this.segmentTracker.trackEvent(label, {
      sessionLength: limit,
      mode: type,
      hardcoreMode: hardcore,
    });
    const sessionLengthString = `Session Length ${rootPageName} ${type} ${limit}`;
    this.segmentTracker.trackEvent(sessionLengthString);
    if (hardcore)
      this.segmentTracker.trackEvent(`Hardcore Mode ${rootPageName}`)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.hideChooser();
    }
  }

  onExpand() {
    this.setState({compact: false});
  }

  hideChooser() {
    this.setState({compact: true});
  }

  renderCompactChooser() {
    const {limit, type} = this.state;
    return (
      <div className="session-chooser">
        <div className="compact"  onClick={ this.onExpand }>
          Session length:
          <span className="choice">{limit} {type} <i className="edit icon-pencil"></i></span>

        </div>
      </div>
    )
  }

  showPanel() { this.setState({hidePanel: false}); }
  setLimit(limit) { this.setState({limit}); }
  setType(type) {
    this.setState({
      type: type,
      limit: this.props.limits[type][1]
    });
  }
  toggleHardcore(_hardcore) { this.setState((prevState, props) => ({ hardcore: !prevState.hardcore })); }

  renderOptions() {
    const options = this.props.limits[this.state.type];
    if (this.state.type === this.props.type && !options.includes(this.props.limit)) {
      options.push(this.props.limit);
      options.sort((a, b) => a - b);
    }
    return options.map((limit) => {
      const classes = classNames('radio', {active: limit === this.state.limit});
      return <span key={limit} className={classes} onClick={() => this.setLimit(limit)}>{limit}</span>
    }
    );
  }

  renderFullChooser() {
    const classes = classNames('full', this.state.type)
    return (
      <div className="session-chooser" ref={this.setWrapperRef}>
        <div className={classes}>
          <div className="tabs">
              <span className="minutes" onClick={() => this.setType("minutes")}>Minutes</span>
              &nbsp;/&nbsp;
              <span className="words" onClick={() => this.setType("words")}>Words</span>
          </div>
          <div className="radios">
            { this.renderOptions() }
          </div>
            <div onClick={this.toggleHardcore} className={classNames('hardcore', {checked: this.state.hardcore})}>Hardcore mode</div>
        </div>
      </div>
    )
  }

  render() {
    const wrapperWlasses = classNames("writeButton", {small: this.props.small})
    const buttonClasses = classNames(this.props.color, {
      small: this.props.small,
      ghost: this.props.ghost,
      noBorder: this.props.noBorder
    })
    const {limit, type, hardcore} = this.state;
    return (
      <div className={wrapperWlasses}>
        { !this.props.noPanel && !this.state.hidePanel && (this.state.compact ? this.renderCompactChooser() : this.renderFullChooser()) }
        <Link
          to={{
            pathname: "/dangerous-writing-prompt-app/write",
            search: `?limit=${limit}&type=${type}` + (hardcore ? '&hardcore=true' : '')
          }}
          className={buttonClasses}
          onMouseOver={this.showPanel}
          onClick={this.trackStartWriting}
        >
          { this.props.label }
        </Link>
      </div>
    )
  }
}

WriteButton.defaultProps = {
  label: "Start Writing w/o Prompt",
  small: false,
  hidePanel: false,
  rootPageName: "Landing Page", 
  limits: {
    minutes: [3, 5, 10, 15, 20, 30, 60],
    words: [75, 150, 250, 500, 1667]
  }
}
