import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from '../Home/Home'

class App extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header>Petstrology</header>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <footer>This is the footer</footer>
      </div>
    )
  }
  
}

export default App;
