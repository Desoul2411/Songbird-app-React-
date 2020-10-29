import React,{ Component } from 'react';
import './BirdsList.scss';
import BirdsListItem from '../BirdsListItem/BirdsListItem';

const BirdsList = ({birds,isLevelCompleted,isAnswerCorrect,idSelected,selectedOptions,isLevelChanged, onClick}) => {
    return(
        <>
            <ul className="bird-list">
                {
                    birds.map((bird,i) =>
                        <BirdsListItem onClick={(birdNameChosen,birdDataChosen) => 
                            onClick(birdNameChosen,birdDataChosen) } 
                            key={bird.id}
                            id={bird.id}
                            name={bird.name} 
                            birdData={bird} 
                            isLevelCompleted={isLevelCompleted}
                            isAnswerCorrect={isAnswerCorrect}
                            idSelected={idSelected}
                            selected={selectedOptions[bird.id - 1]}
                            isLevelChanged={isLevelChanged}
                        />
                    )
                }
            </ul>
        </>
    )
}

export default BirdsList;