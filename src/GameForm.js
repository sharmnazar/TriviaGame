import React, { Component } from 'react';

class GameForm extends Component {
  render() {
    return (
      <main className="gameForm">
        <form onSubmit={this.props.formSubmit}className="gameForm__form">
          <div>
            <label className="gameForm__form--category">
              <h4>Category: </h4>
            </label>
            <select className="gameForm__form--catSelect" name="category" required >
                <option value="generalKnowledge">General Knowledge</option>
                <option value="sports">Sports</option>
            </select>
          </div>
          <div>
            <label className="gameForm__form--difficulty">
              <h4>Difficulty: </h4>
            </label>
            <select className="gameForm__form--diffSelect" name="difficulty" required>
                <option value="any">Any</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    )
  }
}

export default GameForm;