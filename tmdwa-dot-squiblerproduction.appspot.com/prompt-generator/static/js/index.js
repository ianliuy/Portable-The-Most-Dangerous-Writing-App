import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import MDWA from './components/MDWA';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < MDWA / > , document.getElementById('root'));
registerServiceWorker();