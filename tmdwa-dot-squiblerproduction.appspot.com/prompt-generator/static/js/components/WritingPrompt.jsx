import React from 'react';
var classNames = require('classnames');


class WritingPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: this.props.text || '',
          index: this.props.index,
          changePromptContent: this.props.changePromptContent
        };
    
        this.setText = this.setText.bind(this);
    }

    setText() {
        const { index, text } = this.state;
        this.state.changePromptContent(index, text);
    }

    render() {
        const { text } = this.state;
        if (text)
            return (
                <div onClick={this.setText} className={ classNames("writing-prompt-box") } >
                    { text }
                </div>
            )
        else
            return (
                <div className={ classNames("writing-prompt-box text-center") } >
                    <img src={ require('../images/balls.svg') } alt="LOADING..."/>
                </div>
            )
    }
}

export default WritingPrompt