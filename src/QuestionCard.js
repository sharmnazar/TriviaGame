import React, { Component } from 'react'
const decoder = require('html-encoder-decoder');

class QuestionCard extends Component {
  constructor(){
    super();
    this.state = {
      timer: 10
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        timer: this.state.timer - 1
      })
    }, 1000);
  }
  submitAnswer=(e) => {
    e.preventDefault();
    this.props.check(e.target.innerText);
  }
  render() {
    if(!this.props.card){
      return<h1>Loading</h1>
    }
    let {correct_answer, incorrect_answers, question} = this.props.card;
    let answerList = incorrect_answers.filter(()=>true);
    let random = Math.floor(Math.random()*(answerList.length+1));
    answerList.splice(random, 0, correct_answer);
    
    return (
      <div className="questionCard">
        <div>
            <h4>{this.state.timer}</h4>
        </div>
        <h2 className="questionCard__question">{decoder.decode(question)}</h2>
        <ul className="questionCard__list">
          {answerList.map(item=>{
            return <li onClick={this.submitAnswer}>{decoder.decode(item)}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default QuestionCard;