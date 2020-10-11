import React,{ Component } from 'react';
import './BirdInfo.scss';

import BirdPhoto from '../../img/bird-photo.jpg';
import { getRoles } from '@testing-library/react';

/* import Nav from './Nav/Nav'; */

class BirdInfo extends Component {
    constructor(props) {
        super();
        this.state= {
          
        }
    }

    render() {
        let {chosenBirdData} = this.props;
        
        return(
            <div className="bird-info">
                {
                    this.props.chosenBirdData ? 
                    (
                        <>
                            <div className="bird-info__media">
                                <img src={this.props.chosenBirdData.image} className="bird-info__image"/>
                                <div className="bird-info__media-secription-block">
                                    <div className="bird-info__names">
                                         <span className="bird-info__rus-name">{this.props.chosenBirdData.name}</span>
                                        <span className="bird-info__lat-name">{this.props.chosenBirdData.species}</span>
                                    </div>
                                    <audio className="bird-info__player" controls src={this.props.chosenBirdData.audio}/>
                                </div>
                            </div>
                    <p className="bird-info__text-description">{this.props.chosenBirdData.description}</p>
                        </>
                    )
                    : <p className="bird-info__instruction">Послушайте плеер.<br/>Выберите птицу из списка</p>
                }
            </div>
        )
    }
}

export default BirdInfo;