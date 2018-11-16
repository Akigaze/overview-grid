import React, { Component } from "react";

import OverviewGrid from "./component/overview-grid";
import "./style/App.css";
import { overviewInfo } from "./api/data";

class App extends Component {
  onVesselClick = vesselName => {
    console.log(vesselName);
  };
  render() {
    return (
      <div className="App">
        <div className="grid">
          <OverviewGrid
            overviewInfo={overviewInfo}
            infoUpper={false}
            linkClick={this.onVesselClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
