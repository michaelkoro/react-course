import React, { Component } from "react";
//import { Route, Link } from "react-router-dom";
import info from "../model/address-home";
class Home extends Component {
  render() {
    return (
      <div>
        <p>Welcome to our store</p>
        <img
          src="https://media.cntraveler.com/photos/5ab2dd0960926f53f6fec0d2/4:3/w_420,c_limit/George-Peabody-Library-E665TT.jpg"
          alt="books"
        />
        <p>{info.address}</p>
        <p>{info.country}</p>
      </div>
    );
  }
}

export default Home;
