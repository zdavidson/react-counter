import React from "react";

class CounterView extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-secondary m-4">{this.props.count}</h2>
        <button
          className="btn btn-success m-2"
          onClick={this.props.handleClick}
        >
          Count
        </button>
      </div>
    );
  }
}

export default CounterView;
