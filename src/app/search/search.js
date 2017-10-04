import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './search.scss';

export class Search extends Component {
  constructor(params) {
    super(params);
    this.state = {
      search: params.search
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const url = '/search/' + encodeURI(this.state.search.trim());
    browserHistory.push(url);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <h3>FIND YOUR MOVIE</h3>
          <input type="text" value={this.state.search} onChange={this.handleChange} className="search__input"/>
          <div className="search__filter-wrapper">
            <span className="search__filter-title">SEARCH BY</span>
            <span className="search__filter filter--active">TITLE</span>
            <span className="search__filter">DIRECTOR</span>
            <button className="search__btn">SEARCH</button>
          </div>
        </form>
      </div>
    );
  }
}
