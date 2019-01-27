import React, { Component } from "react";
//import App from "./App";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Account from "./Account/Account";

class Main extends Component {
  /*
    increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  */
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <div className="logo" />
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/account" component={Account} />
      </div>
    );
  }
}


export default Main;
