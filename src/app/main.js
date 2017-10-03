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
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <Sort/>
        <Moivelist/>
        <Footer/>
      </div>
    );
  }
}
