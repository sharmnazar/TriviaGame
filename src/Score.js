import React, { Component } from 'react'

class Score extends Component {
  render() {
    if(this.props.points < 3) {
      return (
        <h1>Sorry, you got a score of {this.props.points}/{this.props.questions}. Try harder next time.</h1>
      )
    } else if(this.props.points < 7){
      return (
        <h1>Not bad, you got a score of {this.props.points}/{this.props.questions}</h1>
      )
    } else if(this.props.points < 10){
      return (
        <h1>Good job! you got a score of {this.props.points}/{this.props.questions}</h1>
      )
    } else{
      return (
        <h1>WOW! Amazing, you got a perfect score of {this.props.points}/{this.props.questions}</h1>
      )
    }
    
  }
}

export default Score;