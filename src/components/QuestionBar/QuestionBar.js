import React from 'react';
import './QuestionBar.scss';
import BirdTempImg from '../../img/bird-remplate.jpg';


const QuestionBar = ({randomBird,chosenBirdName,chosenBirdImage}) => {
    return(
        <div className="question-bar">
                <img src={chosenBirdImage ? chosenBirdImage : BirdTempImg} className="question-bar__img"/>
            <div className="question-bar__bird-info">
                <div className="question-bar__bird-name">
                    {chosenBirdName ? chosenBirdName : '******'} 
                </div>
                <div className="question-bar__player-block">
                    <audio className="question-bar__player" controls src={randomBird.audio}/>
                </div>
            </div>
        </div>
    )
}

export default QuestionBar;