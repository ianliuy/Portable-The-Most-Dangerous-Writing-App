import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import WriteButton from './WriteButton';
import Export from './Export';
import {withAppContext} from './AppContext';


const Failure = ({onReset, toggleHelp, limit, type, lost, words, text }) => {
  return (
    <CSSTransitionGroup
      transitionName="failure"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={100}
    >
    { lost && (
      <div className="modal failure" tabIndex="-1" role="dialog" key="failScreen" >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="d-flex justify-content-end">
        <WriteButton
              ghost
              noPanel
              noBorder
              label="X"
              type={type}
              limit={limit}
            /></div>
          <div className="modal-body inner">
            <h3 className="title my-3" >Want More Writing Prompts?</h3>
            <div className="caption my-3" >Join Squilber, the fastest-growing writing prompt community.</div>
            <div className="d-flex justify-content-center">
              <a type="button" href="https://www.squibler.io/" className="btn join-now" >Join Now <img src={ require('../images/next.svg') } alt="Join Now Icon" /></a>
            </div>
            <div className="d-flex justify-content-center splitter">or</div>
            <Export center text={text} fromPage="After Failure"/>

          </div>
        </div>
      </div>
      </div>
      )}
    </CSSTransitionGroup>
  )
}

export default withAppContext(Failure);
