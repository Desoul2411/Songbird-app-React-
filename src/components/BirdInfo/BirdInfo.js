import React from 'react';
import './BirdInfo.scss';

const BirdInfo = ({chosenBirdData}) => {
    return(
        <div className="bird-info">
            {
                chosenBirdData ? 
                (
                    <>
                        <div className="bird-info__media">
                            <img src={chosenBirdData.image} className="bird-info__image" alt="изображение птицы"/>
                            <div className="bird-info__media-secription-block">
                                <div className="bird-info__names">
                                        <span className="bird-info__rus-name">{chosenBirdData.name}</span>
                                    <span className="bird-info__lat-name">{chosenBirdData.species}</span>
                                </div>
                                <audio className="bird-info__player" controls src={chosenBirdData.audio}/>
                            </div>
                        </div>
                <p className="bird-info__text-description">{chosenBirdData.description}</p>
                    </>
                )
                : <p className="bird-info__instruction">Послушайте плеер.<br/>Выберите птицу из списка</p>
            }
        </div>
    )
}

export default BirdInfo;