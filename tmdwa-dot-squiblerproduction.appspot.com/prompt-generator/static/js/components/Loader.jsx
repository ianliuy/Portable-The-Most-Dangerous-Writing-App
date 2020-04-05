import React from 'react';
import { withAppContext } from './AppContext';
var classNames = require('classnames');


const Loader = ({exportingProcess}) => {
    const classes = classNames("loader-wrapper", {"hide": !exportingProcess});
    
    return (
    <div className={classes}>
        <div className="loader-box">
            <img src={require('../images/balls.svg')} alt=""/>
        </div>
    </div>
    )
}

export default withAppContext(Loader);
