import React, {Component} from 'react';
import './sort.scss';

export class Sort extends Component {
  constructor(params) {
    super(params);
    this.state = {
      movies: params.movies
    };
  }
  render() {
    return (
      <div className="sort-wrapper">
        <div className="sort">
          { this.state.movies.length > 0 &&
            <div>
              <span className="sort__result-count"> {this.state.movies.length} movies found</span>
              <div className="sort__box">
                <span className="sort__box-title">Sort by</span>
                <span className="sort__box-item">release date</span>
                <span className="sort__box-item sort--active">rating</span>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}
