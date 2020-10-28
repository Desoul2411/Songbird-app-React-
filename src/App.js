import React, { Component } from 'react';
import './App.css';

import birdsData from './components/BirdsData/BirdsData';
import Header from './components/Header/Header';
import Soundbar from './components/Soundbar/Soundbar';
/* import GameContent from './components/GameContent/GameContent'; */
import BirdsList from './components/BirdsList/BirdsList';
import BirdInfo from './components/BirdInfo/BirdInfo';
import GameOverScreen from './components/GameOverScreen/GameOverScreen';
import NextButton from './controls/NextButton/NextButton';



class App extends Component {
  constructor(props) {
      super();
      this.state= {
        score: 0,
        level: 0,
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
      this.soundCorrect = new Audio('./audio/correct-answer-sound-effect.mp3');
      this.soundIncorrect = new Audio('./audio/incorrect-answer-sound-effect.mp3');
  }


  setRandomBird = () => {
    this.setState((state) => {
      return { randomBird: birdsData[state.level][Math.floor( 0 + Math.random() * (5 + 1 - 0) )] };
    });
  }

  componentDidMount() {
    this.setRandomBird();
  };


  getBirdDescription = (birdChosen,birdData) => {
    let randomBird = this.state.randomBird.name;
    this.isWinRound(birdChosen,randomBird); 
    this.isAlreadyChecked(birdData.id);

    this.setState({levelChanged: false});
    this.setState({
      birdDataChoosen: birdData,
      idSelected: birdData.id
    });
    let selectedOptions = this.state.selectedOptions;
    if (this.state.levelCompleted) {
      this.setState({selectedOptions: this.state.selectedOptions});
    } else {
      selectedOptions[birdData.id - 1] = true;
      this.setState({selectedOptions: selectedOptions});
    }
  };


  isAlreadyChecked = (idChosen) => {
    // prevent attempts increase when click on the previous clicked option
    this.state.selectedOptions[idChosen - 1] && this.setState({attempts: this.state.attempts});
  }

  //Check Answer
  isWinRound = (birdChosen,randomBird) => {
     if (this.state.levelCompleted) {
      this.setState({attempts: this.state.attempts});
    }
    
    else if ( birdChosen !== '' && birdChosen == randomBird) {
      this.setState({attempts: this.state.attempts + 1 });
      this.setState({levelCompleted: true });
      this.setState({currentAnswerisCorrect: true });
      this.playSound(true);
      this.calculateScore();
      alert('win round');
    }  
    else {
      alert('wrong answer');
      this.setState({attempts: this.state.attempts + 1 });
      this.setState({currentAnswerisCorrect: false });
      this.playSound(false);
    }
  }

  playSound(isAnswerCorrect) {
    this.soundIncorrect.load();
    this.soundCorrect.load();

    if (isAnswerCorrect) {
      this.soundCorrect.play();
    } else {
      this.soundIncorrect.play();
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

toNextLevel = () => {
  alert("toNextLevel")
  this.setState({level: this.state.level + 1 });
  this.setState({levelCompleted: false});
  this.setState({attempts: 0});
  this.setState({birdDataChoosen: null});
  this.setState({levelChanged: true});
  this.setState({selectedOptions: Array(6).fill(false)});
  this.setState({currentAnswerisCorrect: null});
  
  this.setRandomBird();
}


  render() {
    return (
      <div className="App">
        <div className="container">
          <Header 
            score={this.state.totalScore} 
            level={this.state.level}
          />
          {/* <GameOverScreen/> */}
          <Soundbar 
            randomBird = {this.state.randomBird} 
            chosenBirdName={this.state.birdDataChoosen !== null && this.state.levelCompleted &&  this.state.birdDataChoosen.name} 
            chosenBirdImage={this.state.birdDataChoosen !== null && this.state.levelCompleted && this.state.birdDataChoosen.image}
          />
          <div className="game-content">
            <BirdsList 
              onClick={(birdNameChosen,birdDataChosen) => this.getBirdDescription(birdNameChosen,birdDataChosen)} 
              birds={birdsData[this.state.level]} 
              isLevelCompleted={this.state.levelCompleted}
              isAnswerCorrect={this.state.currentAnswerisCorrect}
              idSelected={this.state.idSelected}
              selectedOptions = {this.state.selectedOptions}
              isLevelChanged={this.state.levelChanged}
            />
            <BirdInfo 
              chosenBirdData={this.state.birdDataChoosen ? this.state.birdDataChoosen : null } 
              birdsData={birdsData}
            />
          </div>
          {this.state.levelCompleted ? 
            <NextButton className="btn-next active" disabled = {false} onClick={this.toNextLevel}/> : 
            <NextButton className="btn-next" disabled={true}/>} 
        </div>
      </div>
    );
  }
}

export default App;
