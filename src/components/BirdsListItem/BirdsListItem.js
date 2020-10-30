import React, {useRef} from 'react';
import './BirdsListItem.scss';

const BirdsListItem = ({selected, id, isAnswerCorrect, isLevelChanged, name,  birdData, onClick}) => {
    const option = useRef(null);
    let baseStyle = 'bird-list-item';
    let optionStyle = 'bird-list-item';

    if (selected &&  isAnswerCorrect) {
    optionStyle = `bird-list-item success`;
    if (option && option.current.classList.contains('error')) {
        optionStyle = `bird-list-item error`;
    }
    } else if (selected &&  !isAnswerCorrect ) {
    optionStyle = `bird-list-item error`;
    } else optionStyle = baseStyle;

    return(
        <>
            <li id={id} 
                className={isLevelChanged ? "bird-list-item" : optionStyle}
                onClick={(e) => onClick(name, birdData)}
                ref={option}
            >
                <span  className="bird-list-item__indicator"></span>
                {name}
            </li>
        </>
    )
    
}

export default BirdsListItem;