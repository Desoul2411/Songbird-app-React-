import React,{ Component } from 'react';
import './BirdsList.scss';

import BirdsListItem from '../BirdsListItem/BirdsListItem';

class BirdsList extends Component {
    constructor(props) {
        super();
        this.state= {
            class: ''
        }
    }

 /*    addIndicatorClass = e => {
        let indicatorClass = this.props.isLevelCompleted ? "bird-list-item success" : "bird-list-item";
        this.setState({class: indicatorClass });
    }
 */

    render() {
        let {isLevelCompleted} = this.props;
        return(
            <>
                <ul className="bird-list">
                   {
                        this.props.birds.map((bird,i) =>
                            <BirdsListItem onClick={(birdNameChosen,birdDataChosen) => 
                                this.props.onClick(birdNameChosen,birdDataChosen) } 
                                key={bird.id}
                                id={bird.id}
                                name={bird.name} 
                                birdData={bird} 
                                isLevelCompleted={this.props.isLevelCompleted}
                                isAnswerCorrect={this.props.isAnswerCorrect}
                                idSelected={this.props.idSelected}
                                selected={this.props.selectedOptions[bird.id - 1]}
                                isLevelChanged={this.props.isLevelChanged}
                            />
                        )
                   }
                    
                    {/* <BirdsListItem birdName="Журавль"/>
                    <BirdsListItem birdName="Ласточка"/>
                    <BirdsListItem birdName="Козодой"/>
                    <BirdsListItem birdName="Кукушка"/>
                    <BirdsListItem birdName="Синица"/> */}
                </ul>
            </>
        )
    }
}

export default BirdsList;