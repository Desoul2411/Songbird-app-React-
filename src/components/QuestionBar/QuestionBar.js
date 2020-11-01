import React from 'react';
import './QuestionBar.scss';
import BirdTempImg from '../../img/bird-remplate.jpg';
import AudioPlayer from 'react-h5-audio-player';
import '../QuestionBar/audioPlayer.scss';


const QuestionBar = ({randomBird,chosenBirdName,chosenBirdImage,isLevelCompleted}) => {
    if (isLevelCompleted) {
        chosenBirdImage = randomBird.image;
        chosenBirdName = randomBird.name;
    }
    return(
        <div className="question-bar">
                <img src={chosenBirdImage ? chosenBirdImage : BirdTempImg} className="question-bar__img" alt="изображение загаданной птицы"/>
            <div className="question-bar__bird-info">
                <div className="question-bar__bird-name">
                    {chosenBirdName ? chosenBirdName : '******'} 
                </div>
                <div className="question-bar__player-block">
                <AudioPlayer
                    autoPlayAfterSrcChange= {false}
                    layout={'horizontal'}
                    showFilledProgress={true}
                    src={randomBird.audio}
                />
                </div>
            </div>
        </div>
    )
}

export default QuestionBar;