import React, { Component } from "react";
import { connect } from "react-redux";
import "./app-header.css";
import { Link } from "react-router-dom";

//import App from "./App";

class Header extends Component {
  /*
    increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  */
  render() {
    if (this.props.name === "Guest") {
      return (
        <div>
          <header className="header">
            <button>
              <Link to="/account">account</Link>
            </button>
            <button type="button" name="products">
              Products
            </button>
            <img
              src="http://www.vincegolangco.com/wp-content/uploads/2010/12/batman-for-facebook.jpg"
              alt="batman"
            />
            <p>Hello {this.props.name}</p>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header className="header">
            <button>
              <Link to="/account">account</Link>
            </button>
            <button type="button" name="products">
              Products
            </button>
            <img
              src="http://www.vincegolangco.com/wp-content/uploads/2010/12/batman-for-facebook.jpg"
              alt="batman"
            />
            <button type="button" name="Cart">
              My Cart
            </button>
            <p>Hello {this.props.name}</p>
          </header>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  // filter only the reqiered props that we will use in the App component
  // then we can access them inside the class as: this.props.count & this.props.name
  return {
    //count: state.counterReducer.count,
    name: state.userReducer.user.userName
  };
};

const headerexp = connect(mapStateToProps)(Header);
export default headerexp;
