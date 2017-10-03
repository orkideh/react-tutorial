import React, {Component} from 'react';
import {Movie} from '../movie/movie';
import './movieList.scss';

export class Moivelist extends Component {
  constructor(params) {
    super(params);
    this.state = {
      movies: [
        {
          id: 1,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        },
        {
          id: 2,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        },
        {
          id: 3,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        },
        {
          id: 4,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        },
        {
          id: 5,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        },
        {
          id: 6,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        },
        {
          id: 7,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        },
        {
          id: 8,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        },
        {
          id: 9,
          name: 'Kill bill V2',
          realeseDate: 2009,
          rete: 10,
          image: 'http://static.tumblr.com/0khk77t/EyCnuweg5/dvd_boxart.png'
        }
      ]
    };
  }
  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => <Movie key={movie.id} item={movie}/>)}
      </div>
    );
  }
}
