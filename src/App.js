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
        totalScore:0,
        birdDataChoosen: null,
        levelCompleted: '',
        levelChanged: '',
        randomBird: '',
        attempts: 0,
        currentAnswerisCorrect: null,
        idSelected:0,
        selectedOptions: Array(6).fill(false),
      }
  }


  setRandomBird = () => {
    this.setState((state) => {
      return { randomBird: birdsData[state.level][Math.floor( 0 + Math.random() * (5 + 1 - 0) )] };
    });
  }

  componentDidMount() {
    this.setRandomBird();
  }

/*   setAnswerIsCorrectIndicator = () => {

  } */

  getBirdDescription = (birdChosen,birdData) => {
    this.setState({levelChanged: false});
    this.setState({
      birdDataChoosen: birdData,
      idSelected: birdData.id
    });
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[birdData.id - 1] = true;
    this.setState({selectedOptions: selectedOptions});
    
    
    let randomBird = this.state.randomBird.name;
    this.isWinRound(birdChosen,randomBird); 
  }


  isWinRound = (birdChosen,randomBird) => {
    //Check Answer
    if ( birdChosen !== '' && birdChosen == randomBird) {
      this.setState({attempts: this.state.attempts + 1 });
      this.setState({levelCompleted: true });
      this.setState({currentAnswerisCorrect: true });
      this.calculateScore();
      alert('win round');

    } else {
      alert('wrong answer');
      this.setState({attempts: this.state.attempts + 1 });
      this.setState({currentAnswerisCorrect: false });
    }
  }


  calculateScore = () => {
    this.setState((state) => {
      return {score: 5 - (state.attempts - 1)};
    });
    this.setState((state) => {
      return {totalScore: state.totalScore + state.score};
    });
  }

/*   isWinRound = () => {
    this.state.levelCompleted && alert('win level');
  } */

toNextLevel = () => {
  alert(5)
  this.setState({level: this.state.level + 1 });
  this.setState({levelCompleted: false});
  this.setState({attempts: 0});
  this.setState({birdDataChoosen: null});
  this.setState({levelChanged: true});
  this.setState({selectedOptions: Array(6).fill(false)});
  this.setState({currentAnswerisCorrect: null});
  
  this.setRandomBird();
 /*  this.setChoosen */
}


  render() {
    return (
      <div className="App">
        <div className="container">
          <Header score={this.state.totalScore}/>
          <Soundbar randomBird = {this.state.randomBird} chosenBird={this.state.answer}/>
          <div className="game-content">
            <BirdsList onClick={(birdNameChosen,birdDataChosen) => 
                this.getBirdDescription(birdNameChosen,birdDataChosen)} 
                birds={birdsData[this.state.level]} 
                isLevelCompleted={this.state.levelCompleted}
                isAnswerCorrect={this.state.currentAnswerisCorrect}
                idSelected={this.state.idSelected}
                selectedOptions = {this.state.selectedOptions}
                isLevelChanged={this.state.levelChanged}
              />
            <BirdInfo chosenBirdData={this.state.birdDataChoosen ? this.state.birdDataChoosen : null } birdsData={birdsData}/>
          </div>
          {this.state.levelCompleted ? <NextButton className="btn-next active" disabled = {false} onClick={this.toNextLevel}/>
          : <NextButton className="btn-next" disabled={true}/>} 
        </div>
      </div>
    );
  }
}

export default App;
