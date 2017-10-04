import React, {Component} from 'react';
import {Header} from './header/header';
import {Sort} from './sort/sort';
import {Moivelist} from './movielist/movielist';
import {Footer} from './footer/footer';

const styles = {
  container: {
    width: '100%'
  }
};

export class Main extends Component {
  constructor(params) {
    super(params);
    this.state = {
      movies: [],
      searchQuery: params.routeParams.query
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Header search={this.state.searchQuery}/>
        <Sort movies={this.state.movies}/>
        <Moivelist movies={this.state.movies}/>
        <Footer/>
      </div>
    );
  }
}
