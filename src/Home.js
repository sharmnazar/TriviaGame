import React, { Component } from 'react'
import Hero from './Hero';
import GameForm from './GameForm';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <GameForm formSubmit={this.props.formSubmit}/>
      </div>
    )
  }
}

export default Home;