import React from 'react';
import './NextButton.scss';

const NextButton = ({className,disabled,onClick}) => {
    return(
        <>
            <button className={className} disabled={disabled} onClick={() => onClick()}>Дальше</button>
        </>
    )
}

export default NextButton;