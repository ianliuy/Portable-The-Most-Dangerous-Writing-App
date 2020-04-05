import React from 'react';
import SegmentTracker from './SegmentTracking';


export default class TopBar extends React.Component {

  constructor(props) {
    super(props);
    
    this.trackSignUp = this.trackSignUp.bind(this);

    this.segmentTracker = new SegmentTracker(window);
  }

  trackSignUp() {
    this.segmentTracker.trackEvent('Sign Up TMDWA');
  }

  render() {
      return (
          <div className="top-bar">
          <div className="top-bar-left">
              <div className="top-bar-logo">
                  <a href="/dangerous-writing-prompt-app" className="ghost">
                    <img src={ require('../images/leaf.png')} alt="logo"/>
                    <span>Squibler</span>
                  </a>
              </div>
          </div>
          <div className="top-bar-right">
              <div className="top-bar-button">
                  <a onClick={this.trackSignUp} href="https://www.squibler.io">Sign Up</a>
              </div>
          </div>
        </div>
      )
  }
}