import React, {Component} from 'react';
import {Movie} from '../movie/movie';
import './movieList.scss';

export class Moivelist extends Component {
  constructor(params) {
    super(params);
    this.state = {
      movies: []
    };
  }
  render() {
    return (
      <div className="movie-list">
        { this.state.movies.length > 0 ? this.state.movies.map(movie => <Movie key={movie.id} item={movie}/>) : <h2 className="movie-list__not-found">No films found</h2> }
      </div>
    );
  }
}
