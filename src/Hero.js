import React, { Component } from 'react'

class Hero extends Component {
  render() {
    return (
      <header className="hero">
        <div className="hero__image">
        </div>
        <div className="hero__title">
          <h1 className="hero__title--name">Trivia Game</h1>
          <h2 className="hero__title--info">Fill in game details below!</h2>
        </div>
      </header>
    )
  }
}

export default Hero;