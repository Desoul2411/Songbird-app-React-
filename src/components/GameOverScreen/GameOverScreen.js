import React from 'react';
import ResetButton from '../../controls/ResetButton/ResetButton';
import './GameOverScreen.scss';

const GameOverScreen = () => {

    return(
        <div className="game-over-screen">
            <h1 className="game-over-screen__headline">Поздравляем!</h1>
            <p className="game-over-screen__message">Вы прошли викторину и набрали 12 из 30 возможных баллов</p>
            <hr className="game-over-screen__line"/>
            <ResetButton/>
        </div>
    )
}

export default GameOverScreen;