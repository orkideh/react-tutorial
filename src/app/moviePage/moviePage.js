import React, {Component} from 'react';
import {MovieHeader} from '../movieHeader/movieHeader';
import {MovieBy} from '../movieBy/movieBy';
import {Footer} from '../footer/footer';

import './moviePage.scss';

export class MoviePage extends Component {
  render() {
    return (
      <div className="movie-page">
        <MovieHeader/>
        <MovieBy/>
        <Footer/>
      </div>
    );
  }
}
