import React, {Component} from 'react';

const styles = {
  container: {
    width: '100%'
  },
  main: {
    background: 'white'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <main style={styles.main}>
          Hello World !!!
        </main>
      </div>
    );
  }
}
