import React, { Component } from "react";
import Dice from "./Dice";

class RollDice extends Component {
  render() {
    return (
      <div>
        <Dice face="five" />
        <Dice face="six" />
        <button>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
