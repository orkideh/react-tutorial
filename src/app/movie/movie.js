import React, {Component} from 'react';
import './movie.scss';

export class Movie extends Component {
  constructor(params) {
    super(params);
    this.state = {
      movie: params.item
    };
  }
  render() {
    return (
      <div className="movie-item">
        <img src={this.state.movie.image} alt={this.state.movie.name}/>
        <div className="movie-item__title-box">
          <span className="movie-item__title">
            {this.state.movie.name}
          </span>
          <span className="movie-item__release-date">
            2004
          </span>
        </div>
        <div className="movie-item__genre-box">
          <span className="movie-item__genere">
            Drama
          </span>
        </div>
      </div>
    );
  }
}
