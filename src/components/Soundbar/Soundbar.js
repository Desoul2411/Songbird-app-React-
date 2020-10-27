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
        let {randomBird,chosenBirdName,chosenBirdImage} = this.props;
      /*   console.log('random', randomBird)
        console.log('chosen', chosenBird) */


       
        return(
            <div className="soundbar">
                    <img src={chosenBirdImage ? chosenBirdImage : BirdTempImg} className="soundbar__img"/>
               <div className="soundbar__bird-info">
                    <div className="soundbar__bird-name">
                       {chosenBirdName ? chosenBirdName : '******'} 
                    </div>
                    <div className="soundbar__player-block">
                        <audio className="soundbar__player" controls src={randomBird.audio}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Soundbar;