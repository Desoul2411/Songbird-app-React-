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
        points: 0,
        birdDataChoosen: null,
        levelCompleted: '',
        randomBird: '',
      }
      this.randomBird = birdsData[0][Math.floor( 0 + Math.random() * (5 + 1 - 0) )];
  }

  componentDidMount() {
    this.setState({ randomBird: this.randomBird.name })
  }

/*   setAnswerIsCorrectIndicator = () => {

  } */

  calculatePoints = () => {
    //Check Answer
    if ( this.state.answer !== '' && this.randomBird.name == this.state.answer) {
      this.setState({points:this.state.points + 5 })
      this.setState({levelCompleted: true })
      alert('win')
    } else {
      alert('loose')
    }
  }

  getBirdDescription = (birdChosen,birdData) => {
    this.setState({answer: birdChosen });
    this.setState({birdDataChoosen: birdData });

    this.calculatePoints(); 
  }



  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <Soundbar randomBird = {this.randomBird} chosenBird={this.state.answer}/>
          <div className="game-content">
            <BirdsList onClick={(birdNameChosen,birdDataChosen) => 
                this.getBirdDescription(birdNameChosen,birdDataChosen)} 
                birds={birdsData} 
                isLevelCompleted={this.state.levelCompleted}
              />
            <BirdInfo chosenBirdData={this.state.birdDataChoosen} birdsData={birdsData}/>
          </div>
          <NextButton onClick={(e) => console.log(e.target)}/>
        </div>
      </div>
    );
    }
}

export default App;
