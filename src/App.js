import React, { Component } from 'react';
import FilmDetails from './components/FilmDetails';
import FilmListing from './components/FilmListing';
import './App.css';
import TMDB from './TMDB.js'
import FilmRow from './components/FilmRow.js'

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB}/>
        <FilmDetails />
      </div>
    );
  }
}

export default App;
