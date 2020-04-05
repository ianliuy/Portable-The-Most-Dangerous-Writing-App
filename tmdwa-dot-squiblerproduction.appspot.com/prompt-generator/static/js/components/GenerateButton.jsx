import React from 'react';
var classNames = require('classnames');

export default class GenerateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idsList: this.props.idsList || [],
      changePromptContent: this.props.changePromptContent,
      generatePromptEvent: this.props.generatePromptEvent
    };

    this.generatePrompt = this.generatePrompt.bind(this);
  }

  generatePrompt() {
      this.state.changePromptContent();
      this.state.generatePromptEvent("Generate New Prompt");
  }


  render() {
    const wrapperWlasses = classNames("writeButton", {small: this.props.small})
    const buttonClasses = classNames(this.props.color, {
      small: this.props.small,
      ghost: this.props.ghost
    })
    return (
      <div className={wrapperWlasses}>
        <a onClick={this.generatePrompt} className={buttonClasses}>
            { this.props.label }
        </a>
      </div>
    )
  }
}

GenerateButton.defaultProps = {
  label: "Generate a Prompt",
  small: false
}
