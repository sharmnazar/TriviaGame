import React, { Component } from 'react'

class QuestionCard extends Component {
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
        <h2 className="questionCard__question">{question}</h2>
        <ul className="questionCard__list">
          {answerList.map(item=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default QuestionCard;