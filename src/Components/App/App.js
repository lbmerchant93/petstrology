import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

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
          <Route path='/' render={() => <main>404</main>} />
        </Switch>
        <Footer />
      </div>
    )
  }
  
}

export default App;
