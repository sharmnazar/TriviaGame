import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import './index.scss';
import Home from './Home';
import Footer from './Footer';
import Game from './Game';
import GameHeader from './GameHeader';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state={
      questionNum: 10,
      category: "",
      difficulty: "",
      questions: [],
      score: 0,
      time: 0
    }
    this.categories = {
      generalKnowledge: 9,
      sports: 21
    }
  }


  submitGame = (e) => {
    e.preventDefault();
    const category = e.target.category.value;
    const difficulty = e.target.difficulty.value;
    const cat = `&category=${this.categories[category]}`;
    const type = "&type=multiple";
    let diff = `&difficulty=${difficulty}`;
    if (diff === "&difficulty=any"){
      diff = "";
    }
    axios.get("https://opentdb.com/api.php?amount=" + this.state.questionNum + cat + diff + type).then(res=>{
      this.setState({
        category: category,
        difficulty: difficulty,
        questions: res.data.results
      });
    }).catch(err=>{
      console.log(err);
    })
    this.props.history.push("/game");
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => {return <Home formSubmit={this.submitGame}/>}} />
          <Route path="/game" render={() => {
            return <>
                <GameHeader />
                <Game len={this.state.questionNum} questions={this.state.questions}/>
              </>
            }} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
