import React, { Component } from 'react'
const decoder = require('html-encoder-decoder');

class QuestionCard extends Component {
  constructor(){
    super();
    this.state = {
      timer: 60
    }
  }
  componentDidMount(){
    this.int = setInterval(()=>{
      this.setState({
        timer: this.state.timer - 1
      })
    }, 1000);
  }
  componentDidUpdate(){
    if(this.state.timer<1){
      this.props.check("");
    }
  }
  componentWillUnmount(){
    clearInterval(this.int);
  }
  submitAnswer=(e) => {
    e.preventDefault();
    this.props.check(e.target.innerText);
  }
  render() {
    if(!this.props.card){
      return<h1>Loading</h1>
    }
    let {question} = this.props.card;
    return (
      <div className="questionCard">
        <div>
            <h2>Timer: {this.state.timer}</h2>
        </div>
        <h2 className="questionCard__question">{decoder.decode(question)}</h2>
        <ul className="questionCard__list">
          {this.props.list.map(item=>{
            return <li onClick={this.submitAnswer} key={item}>{decoder.decode(item)}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default QuestionCard;