import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Horoscope from '../Horoscope/Horoscope';
import Footer from '../Footer/Footer';
import { fetchHoroscope } from '../../apiCalls';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true,
      errorMsg: '',
      day: 'today',
      sign: '',
      horoscope: '',
      image: ''
    }
  }

  retrieveHoroscopeData = async (url, src, alt) => {
    await fetchHoroscope(url)
    .then(result => {
        this.setState({ isLoading: true, horoscope: '' })
        if (typeof result === 'string') {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    errorMsg: result
                })
            }, 1000)
          } else {
            setTimeout(() => {
                this.setState({
                    image: src,
                    sign: alt, 
                    horoscope: result,
                    isLoading: false
                })
            }, 600)   
          }
    })
  }

  retrieveDifferentDay = (when) => {
    let url;
    if (when === 'yesterday') {
        url= `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=yesterday`
    } else if (when === 'tomorrow') {
        url = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=tomorrow`
    } else if (when === 'today') {
        url = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=today`
    }
    this.retrieveHoroscopeData(url, this.state.image, this.state.sign)
    this.setState({ day: when })
  }

  goingToPage = (page) => {
    if(page === 'home') {
      this.setState({
        isLoading: true,
        errorMsg: '',
        day: 'today',
        sign: '',
        horoscope: '',
        image: ''
      })
    }
  }

  render() {

    return (
      <div className="App">
        <Header goingToPage={this.goingToPage}/>
        <Switch>
          <Route path='/' exact render={() => <Home retrieveHoroscopeData={this.retrieveHoroscopeData} />} />
          <Route path='/Horoscope/:sign' exact render={() => <Horoscope horoscope={this.state} retrieveDifferentDay={this.retrieveDifferentDay}/>} />
          <Route path='/' render={() => <main>404</main>} />
        </Switch>
        <Footer />
      </div>
    )
  }
  
}

export default App;
