import React, { Component } from 'react';
import WriteButton from './WriteButton';
import GenerateButton from './GenerateButton';
import Space from './Space';
import TopBar from './TopBar';
import WritingPrompt from './WritingPrompt';
import { PromptContext } from './AppContext';
import SegmentTracker from './SegmentTracking';
import Footer from './Footer';


export default class Welcome extends Component {
  constructor(props) {
    super(props);

    const url = 'https://writing-prompts-dot-squiblerproduction.appspot.com';

    this.segmentTracker = new SegmentTracker(window);
    this.segmentTracker.trackPage('Loaded TMDWP Start Page');

    localStorage.removeItem('promptContent');

    this.changePromptContent = () => {

      this.setState({
        promptContent: undefined,
        selectedPromptId: -1
      });

      this.state.showGenerator = false;

      const idsList = this.state.idsList;
      let newId = idsList[Math.floor(Math.random() * idsList.length)];

      if (newId !== undefined)
        fetch(`${url}/prompts/${newId}`)
          .then(res => res.json())
          .then(
            (result) => {
              const {content, id} = result.data;
              this.setState({
                promptContent: content,
                selectedPromptId: id
              });
              localStorage.setItem('promptContent', content)
            },
            (error) => {
              this.setState({
                promptContent: "--- ERROR ---",
                error
              });
            }
          )
    }

    this.loadPromptIds = () => {
      return fetch(`${url}/prompts/ids`)
      .then(res => res.json())
      .then(
        (result) => {
          const idsList = result.data;
          this.setState({
            idsList,
          }, () => {
            this.changePromptContent()
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    }

    this.toggleGenerator = () => {
      this.setState({
        promptContent: "",
     })
      this.changePromptContent();
      this.state.showGenerator = true;
    }

    this.generatePromptEvent = () => {
      this.segmentTracker.trackEvent('Generate New Prompt');
      this.state.showGenerator = true;
    }

    fetch(`${url}/prompts/ids`)
      .then(res => res.json())
      .then(
        (result) => {
          const idsList = result.data;
          this.setState({
            idsList,
          }, () => {
            this.changePromptContent()
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    
    this.state = {
      idsList: [],
      promptContent: "",
      selectedPromptId: -1,
      changePromptContent: this.changePromptContent,
      generatePromptEvent: this.generatePromptEvent
    };

    this.segmentTracker = new SegmentTracker(window);
    this.segmentTracker.trackPage('Loaded TMDWP Prompt Page');
  }

  scrollToTop() {
    this.segmentTracker.trackEvent('Lets Go TMDWA Page Bottom');
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="Welcome non-fixed">
        <TopBar />
        <Space l hide-600 />
        <div>
        <div className="logo">
            <h1>
              The Most <span>Dangerous</span> Writing App
            </h1>
          </div>
          <Space xs />
          <h2>
            Don’t stop writing, or all progress will be lost.
          </h2>
          <Space xs />
          <Space l hide-600 />
          <div className="buttons-wrapper">
            { this.state.showGenerator ?
              <PromptContext.Provider value={this.state}>
                <PromptContext.Consumer>{({ changePromptContent, idsList, generatePromptEvent }) =>
                      <GenerateButton ghost 
                        changePromptContent={changePromptContent} 
                        idsList={idsList}
                        generatePromptEvent={generatePromptEvent}
                        label="Generate New Prompt"/>
                    }
                </PromptContext.Consumer>
              </PromptContext.Provider>
              :
              <div className="writeButton" onClick={this.toggleGenerator}>
                <a className="ghost">Generate a Prompt</a>
              </div>
            }
            <WriteButton ghost label="Start Writing" color="red" rootPageName="Promp Page" />
          </div>

          { this.state.showGenerator ?
        <div>
          <Space m  hide-600 />
          <PromptContext.Provider value={this.state}>
            <PromptContext.Consumer>{({ changePromptContent, selectedPromptId, promptContent }) =>
              <div>
                <div className="writing-prompt-list" >
                <WritingPrompt 
                    key={selectedPromptId} index={selectedPromptId} text={promptContent}
                    selected={ false }
                    changePromptContent={changePromptContent}
                />
                </div>
              </div>
              }
            </PromptContext.Consumer>
          </PromptContext.Provider>
        </div> 
        : null }
        <Space l />
        <div className="accolades">
          <img className="accolades-full" src={require('../images/logos.png')} alt="accolades" />
          <span className="accolades-p0 as-seen-in">as seen in</span>
          <img className="accolades-p1" src={require('../images/logos_1p.png')} alt="accolades" />
          <img className="accolades-p2" src={require('../images/logos_2p.png')} alt="accolades" />
          <img className="accolades-p3" src={require('../images/logos_3p.png')} alt="accolades" />
        </div>
        <Space l with-bottom-shadow />

        <div className="bottom-box">
          <Footer mt-4 />
        </div>
        </div>
      </div>
    )
  }
}
