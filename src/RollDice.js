import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = { dice1: "one", dice2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const newDice1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDice2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ dice1: newDice1, dice2: newDice2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Dice face={this.state.dice1} />
          <Dice face={this.state.dice2} />
        </div>
        <div>
          <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rollling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
