import React from 'react';
import Radium from 'radium';

export default class HelloWorld extends React.Component {
  render() {
    return <div style={styles.text}>Hello {this.props.name}</div>;
  }
}

const styles = {
  text: {
    color: 'red',
    fontSize: '40px',
    fontWeight: 'bold'
  }
};
