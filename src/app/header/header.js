import React, {Component} from 'react';
import {Search} from '../search/search';
import './header.scss';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__data-wrapper">
          <h2 className="header__title">netflixroulette</h2>
          <Search/>
        </div>
      </div>
    );
  }
}
