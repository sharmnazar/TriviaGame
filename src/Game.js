import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import QuestionCard from './QuestionCard';
import Score from './Score';
import AudioPlayer from 'react-audio-player';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      questionsNum: 10,
      index: 0
    }
  }
  checkAnswer = ans => {
    let question = this.props.questions[this.state.index];
    if(ans === question.correct_answer){
      this.setState({
        score: (this.state.score + 1),
        index: (this.state.index + 1)
      });
      let audio = new Audio('./audio/Correct.mp3');
      audio.play();
    }
    else{
      this.setState({
        index: (this.state.index + 1)
      });
      let audio = new Audio('./audio/Wrong.mp3');
      audio.play();
    }
  }
  exitGame = e => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to abandon mission?")){
      this.props.history.push("/");
    }
  }
  render() {
    if(this.state.index === this.state.questionsNum){
      return (
        <div className="gameScore">
          <Score points={this.state.score} questions={this.state.questionsNum}/>
          <Link to={"/"}><button>Play again?</button></Link>
        </div>
      )
    }
    if(!this.props.questions){
      return <h1>Loading</h1>
    }
    return (
      <div className="game">
        <AudioPlayer src="./audio/main.mp3" autoPlay loop={true} volume={0.3}/>
        <div className="game__stats">
          <div className="game__question">
            <h4>{this.state.index + 1}/{this.state.questionsNum}</h4>
          </div>
          <div className="game__score">
            <h4>Score: {this.state.score}</h4>
          </div>
        </div>
        <QuestionCard card={this.props.questions[this.state.index]} check={this.checkAnswer}/>
        <div className="game__exit">
          <button onClick={this.exitGame}>Exit?</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Game);