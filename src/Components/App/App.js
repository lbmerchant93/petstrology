import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';

class App extends Component {
  constructor() {
    super() 
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
        <footer>This is the footer</footer>
      </div>
    )
  }
  
}

export default App;
