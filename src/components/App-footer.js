import React, { Component } from "react";
import { connect } from "react-redux";
//import App from "./App";

class Footer extends Component {
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
      <footer>
        <p>© All Rightes Reserved {new Date().getFullYear()}</p>
      </footer>
    );
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

const footerexp = connect(mapStateToProps)(Footer);
export default footerexp;
