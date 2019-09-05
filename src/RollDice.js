import React, { Component } from "react";
import Dice from "./Dice";

class RollDice extends Component {
  render() {
    return (
      <div>
        <h1>RollDice Component</h1>
        <Dice />
        <button>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
