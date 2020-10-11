import React, { Component } from 'react';
import './App.css';

import birdsData from './components/BirdsData/BirdsData';
import Header from './components/Header/Header';
import Soundbar from './components/Soundbar/Soundbar';
/* import GameContent from './components/GameContent/GameContent'; */
import BirdsList from './components/BirdsList/BirdsList';
import BirdInfo from './components/BirdInfo/BirdInfo';
import NextButton from './controls/NextButton/NextButton';


class App extends Component {
  constructor(props) {
      super();
      this.state= {
        score: 0,
        level: 0,
        answer: '',
        birdDataChoosen: null
      }
  }


getBirdDescription = (birdChosen,birdData) => {
  console.log(birdChosen);
  console.log(birdData);
  this.setState({answer: birdChosen });
  this.setState({birdDataChoosen: birdData });
}

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <Soundbar/>
          <div className="game-content">
            <BirdsList onClick={(birdNameChosen,birdDataChosen) => this.getBirdDescription(birdNameChosen,birdDataChosen)} birds={birdsData}/>
            <BirdInfo chosenBirdData={this.state.birdDataChoosen} birdsData={birdsData}/>
          </div>
          <NextButton onClick={(e) => console.log(e.target)}/>
        </div>
      </div>
    );
    }
}

export default App;
