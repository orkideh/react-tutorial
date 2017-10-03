import React, {Component} from 'react';
import {MovieContent} from '../movieContent/movieContent';
import './moiveHeader.scss';

export class MovieHeader extends Component {
  render() {
    return (
      <div className="movie-header">
        <div className="movie-header__top-bar">
          <h2 className="movie-header__title">netflixroulette</h2>
          <button className="movie-header__btn">SEARCH</button>
        </div>
        <MovieContent/>
      </div>
    );
  }
}
