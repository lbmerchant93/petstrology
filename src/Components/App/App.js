import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import FindSign from '../FindSign/FindSign';
import Horoscope from '../Horoscope/Horoscope';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { fetchHoroscope } from '../../apiCalls';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isLoading: true,
      errorMsg: '',
      day: '',
      sign: '',
      horoscope: '',
      image: '',
      savedDates: [],
      atHome: true,
      atFindSign: false
    }
  }

  retrieveHoroscopeData = async (url, src, alt, when) => {
    this.resetState()
    this.goingToPage('away')
    await fetchHoroscope(url)
    .then(result => {
        this.setState({ isLoading: true, horoscope: '' })
        if (typeof result === 'string') {
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    errorMsg: result,
                    atHome: false
                })
            }, 600)
          } else {
            setTimeout(() => {
                this.setState({
                    day: when || 'today',
                    image: src,
                    sign: alt, 
                    horoscope: result,
                    isLoading: false,
                    atHome: false
                })
            }, 600)   
          }
    })
  }

  retrieveDifferentDay = (when) => {
    let url = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=${when}`;
    this.retrieveHoroscopeData(url, this.state.image, this.state.sign, when)
  }

  resetState = () => {
    this.setState({
      isLoading: true,
      errorMsg: '',
      day: 'today',
      sign: '',
      horoscope: '',
      image: '',
      atHome: false,
      atFindSign: false
    })
  }

  goingToPage = (page) => {
    if (page === 'atHome') {
      this.setState({
        atHome: true,
        atFindSign: false
      })
    } else if (page === 'atFindSign') {
      this.setState({ 
        atHome: false,
        atFindSign: true
      })
    } else if (page === 'away') {
      this.setState({
        atHome: false,
        atFindSign: false
      })
    }
  }

  addBirthDate = (newBirthDate) => {
    this.setState({ savedDates: [...this.state.savedDates, newBirthDate]})
  }

  removeBirthDate = (id) => {
    const filteredDates = this.state.savedDates.filter(saved => saved.id !== id);
    this.setState({ savedDates: filteredDates })
  }

  render() {
    const { atHome, atFindSign } = this.state;

    return (
      <div className="App">
        <Header 
          goingToPage={this.goingToPage} 
          atHome={atHome}
          atFindSign={atFindSign}
        />
        <Switch>
          <Route path='/' exact render={() => 
            <Home 
              retrieveHoroscopeData={this.retrieveHoroscopeData} 
            />} 
          />
          <Route path='/FindYourSigns' exact render={() => 
            <FindSign 
              savedDates={this.state.savedDates}
              addBirthDate={this.addBirthDate}
              removeBirthDate={this.removeBirthDate}
              retrieveHoroscopeData={this.retrieveHoroscopeData}
            />}
          />
          <Route path='/Horoscope/:sign' exact render={() => 
            <Horoscope 
              horoscope={this.state} 
              retrieveDifferentDay={this.retrieveDifferentDay}
            />} 
          />
          <Route path='/About' exact render={() => 
            <About goingToPage={this.goingToPage}/>} 
          />
          <Route path='/Contact' exact render={() => 
            <Contact />} 
          />
          <Route path='/' render={() => <main>404</main>} />
        </Switch>
        <Footer 
          goingToPage={this.goingToPage}
        />
      </div>
    )
  }
  
}

export default App;
