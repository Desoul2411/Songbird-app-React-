import React,{ Component } from 'react';
import './BirdsList.scss';

import BirdsListItem from '../BirdsListItem/BirdsListItem';

class BirdsList extends Component {
    constructor(props) {
        super();
        this.state= {

        }
    }

    render() {

        return(
            <>
                <ul className="bird-list">
                   {
                        this.props.birds[0].map((bird,i) =>
                            <BirdsListItem onClick={(birdNameChosen,birdDataChosen) => this.props.onClick(birdNameChosen,birdDataChosen)} key={bird.id} name={bird.name} birdData={bird} />
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