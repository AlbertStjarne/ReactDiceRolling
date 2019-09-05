import React, { Component } from "react";

class Dice extends Component {
  render() {
    let rand = Math.floor(Math.random() * 6) + 1;
    return (
      <div>
        <h2>Dice Component</h2>
        {rand}
        <i className="fas fa-dice-three"></i>
      </div>
    );
  }
}

export default Dice;
