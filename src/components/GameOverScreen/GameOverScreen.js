import React from 'react';
import ResetButton from '../../controls/ResetButton/ResetButton';
import './GameOverScreen.scss';
import BirdFinalImg from '../../img/final-bird.jpg';

const GameOverScreen = ({onClick,totalScore}) => {
    return(
        <div className="game-over-screen">
             {
                totalScore === 30 ?
                <h1 className="game-over-screen__headline">Поздравляем!</h1> : ''
            } 
            <p className="game-over-screen__message">
                {
                    totalScore === 30 ?
                    `Вы прошли викторину и набрали 30 из 30 возможных баллов` : 
                    `Вы набрали ${totalScore} из 30 возможных баллов`
                } 
            </p>
            <hr className="game-over-screen__line"/>
            {totalScore === 30 ?  <img src={BirdFinalImg} className="game-over-screen__final-bird-image" alt="финальное изображение"/> : <ResetButton onClick={()=> onClick()}/>} 
        </div>
    )
}

export default GameOverScreen;