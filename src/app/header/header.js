import React, {Component} from 'react';
import {Search} from '../search/search';
import './header.scss';

export class Header extends Component {
  constructor(params) {
    super(params);
    this.state = {
      searchQuery: params.search
    };
  }
  render() {
    return (
      <div className="header">
        <div className="header__data-wrapper">
          <h2 className="header__title">netflixroulette</h2>
          <Search search={this.state.searchQuery}/>
        </div>
      </div>
    );
  }
}
