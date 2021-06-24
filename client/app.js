import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page";

class App extends React.Component {
  render() {
    return (
      <div>
        <Page />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
