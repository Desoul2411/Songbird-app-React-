import React,{ Component } from 'react';
import './Soundbar.scss';
import BirdTempImg from '../../img/bird-remplate.jpg';


class Soundbar extends Component {
    constructor(props) {
        super();
        this.state= {

        }
    }


    render() {
        return(
            <div className="soundbar">
                    <img src={BirdTempImg} className="soundbar__img"/>
               <div className="soundbar__bird-info">
                    <div className="soundbar__bird-name">
                        ******
                    </div>
                    <div className="soundbar__player-block">
                        <audio className="soundbar__player" controls src=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Soundbar;