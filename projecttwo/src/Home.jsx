import React, { Component } from "react";

export default class Home extends Component {
  constructor(name) {
    super();
    this.brand = name;
  }

  render() {
    const mycar = new Home("Ford");

    return (
      <div>
        <div>Hello home my car is ,{mycar.brand}</div>

        <div></div>
      </div>
    );
  }
}
