import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    faces: [ 'one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props);
    this.state = { dieOne: "one", dieTwo: "two", isRolling: false, totalOutputs: null};
    this.roll = this.roll.bind(this);
  }

  roll() {
    const randOne = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
    const randTwo = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
    const outputs = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6 };
    const firstOutput = outputs[randOne];
    const secondOutput = outputs[randTwo];
    const totalOutputs = firstOutput + secondOutput;
    this.setState({ dieOne: randOne, dieTwo: randTwo, isRolling: true, totalOutputs:totalOutputs});
    setTimeout(() => {
      this.setState({ isRolling: false})
    }, 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.dieOne} rolling={this.state.isRolling}/>
          <Die face={this.state.dieTwo} rolling={this.state.isRolling}/>
        </div>
        <p className="RollDice-output">{this.state.totalOutputs}</p>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling...": "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
