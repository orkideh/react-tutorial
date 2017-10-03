import React, {Component} from 'react';
import './search.scss';

export class Search extends Component {
  render() {
    return (
      <div className="search">
        <h3>FIND YOUR MOVIE</h3>
        <input type="text" className="search__input"/>
        <div className="search__filter-wrapper">
          <span className="search__filter-title">SEARCH BY</span>
          <span className="search__filter filter--active">TITLE</span>
          <span className="search__filter">DIRECTOR</span>
          <button className="search__btn">SEARCH</button>
        </div>
      </div>
    );
  }
}
