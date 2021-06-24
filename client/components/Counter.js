import React, { useState } from "react";
import CounterView from "./CounterView";

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <CounterView count={this.state.count} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Counter;
