import React from 'react';
import classNames from 'classnames';

const Space = (props) => {
    const classes = classNames('space', props);
    return <div className={classes} />
}

export default Space;
