import React, {Component} from 'react';
import {Moivelist} from '../movielist/movielist';
import './movieBy.scss';

export class MovieBy extends Component {
  render() {
    return (
      <div className="movie-by">
        <div className="movie-by__grey-bar">
          <h3 className="movie-by__title">
            Films by Quentin Tarantino
          </h3>
        </div>
        <Moivelist/>
      </div>
    );
  }
}
