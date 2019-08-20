import React, { Component } from 'react';
import './Die.css';

const BASE_DIE = `fas fa-dice-`


class Die extends Component {
  render() {
    return <i className={`Die ${BASE_DIE}${this.props.face} ${this.props.rolling? "wobbling": ""}`}></i>
  }
}

export default Die;
