import React, {Component} from 'react';
import './sort.scss';

export class Sort extends Component {
  render() {
    return (
      <div className="sort-wrapper">
        <div className="sort">
          <span className="sort__result-count">7 movies found</span>
          <div className="sort__box">
            <span className="sort__box-title">Sort by</span>
            <span className="sort__box-item">release date</span>
            <span className="sort__box-item sort--active">rating</span>
          </div>
        </div>
      </div>
    );
  }
}
