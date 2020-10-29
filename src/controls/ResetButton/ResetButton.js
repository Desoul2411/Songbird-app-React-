import React from 'react';
import './ResetButton.scss';

const ResetButton = ({onClick}) => {
    return(
        <>
            <button className="game-over-screen__reset-button" onClick={()=> onClick()}>Попробовать еще раз!</button>
        </>
    )
}

export default ResetButton;