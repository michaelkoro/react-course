import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";
import Register from "./Register";

class Account extends Component {
  logout = () => {
    this.props.dispatch({
      type: "LOGOUT",
      payload: "Guest"
    });
  };

  render() {
    if (this.props.name === "Guest") {
      return (
        <div>
          <button>
            <Link to="/account/login">login</Link>
          </button>
          <button>
            <Link to="/account/register">register</Link>
          </button>
          <br/>
          <br/>
          <Route exact path="/account/login" component={Login} />
          <Route exact path="/account/register" component={Register} />
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.logout}>logout</button>
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

const Accountexp = connect(mapStateToProps)(Account);

export default Accountexp;
