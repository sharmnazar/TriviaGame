import React, { Component } from 'react'
import QuestionCard from './QuestionCard';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      score: 0,
      questionsNum: 10,
      index: 0
    }
  }
  render() {
    if(!this.props.questions){
      return <h1>Loading</h1>
    }
    return (
      <div className="game">
        <div className="game__stats">
          <div className="game__question">
            <h4>{this.state.index}/{this.state.questionsNum}</h4>
          </div>
          <div className="game__score">
            <h4>Score: {this.state.score}</h4>
          </div>
        </div>
        <QuestionCard card={this.props.questions[this.state.index]} />
      </div>
    )
  }
}

export default Game;