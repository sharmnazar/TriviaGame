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
                <option value="books">Books</option>
                <option value="film">Film</option>
                <option value="music">Music</option>
                <option value="musicals">Musicals and Theatre</option>
                <option value="tv">TV</option>
                <option value="videoGames">Video Games</option>
                <option value="boardGames">Board Games</option>
                <option value="scienceNature">Science and Nature</option>
                <option value="computers">Computers</option>
                <option value="math">Math</option>
                <option value="mythology">Mythology</option>
                <option value="geography">Geography</option>
                <option value="history">History</option>
                <option value="politics">Politics</option>
                <option value="art">Art</option>
                <option value="celebrities">Celebrities</option>
                <option value="animals">Animals</option>
                <option value="vehicles">Vehicles</option>
                <option value="comics">Comics</option>
                <option value="gadgets">Gadgets</option>
                <option value="animeManga">Anime and Manga</option>
                <option value="cartoons">Cartoons and Animations</option>
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
          <button type="submit">Start!</button>
        </form>
      </main>
    )
  }
}

export default GameForm;