import React, { Component } from "react";
import countryName from "./Name";
import countryFlag from "./Flag";

class AppCountryInfo extends Component {
  render() {
    return (
      <div>
        <countryName countryName={this.props.countryName} />
        <countryFlag countryFlag={this.props.countryFlag} />
      </div>
    );
  }
}

export default AppCountryInfo;
