import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import {MoviePage} from './app/moviePage/moviePage';

import './index.scss';
import '../node_modules/normalize.css/normalize.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/movie" component={MoviePage}/>
  </Router>,
  document.getElementById('container')
);
