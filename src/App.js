import React, { Component } from "react";

import OverviewGrid from "./component/overview-grid";
import "./style/App.css";
import {props} from "./api/data"

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="grid">
          <OverviewGrid {...props}/>
        </div>
      </div>
    );
  }
}

export default App;
