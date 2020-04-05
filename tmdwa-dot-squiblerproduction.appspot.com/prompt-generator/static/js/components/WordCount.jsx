import React from 'react';
import {withAppContext} from './AppContext';

const WordCount = ({words}) =>
  <div className="wordcount">{ words || 0 } { words === 1 ? "word" : "words" }</div>

export default withAppContext(WordCount);
