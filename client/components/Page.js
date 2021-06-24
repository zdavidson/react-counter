import React from "react";
import Counter from "./Counter";

class Page extends React.Component {
  render() {
    return (
      <div className="container d-flex flex-column align-items-center mt-4 p-4 rounded bg-light shadow">
        <h1>Counter.js</h1>
        <Counter />
      </div>
    );
  }
}

export default Page;
