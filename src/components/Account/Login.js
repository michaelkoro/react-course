import React, { Component } from "react";
import { connect } from "react-redux";
import usersList from "../../model/users-list";

class Login extends Component {
  login = () => {
    let userName = this.refs.userName.value;
    let password = this.refs.password.value;
    if (this.CheckUser(userName) && this.CheckPassword(password)) {
      alert("ok");
      this.props.dispatch({
        type: "LOGIN",
        payload: { userName, password }
      });
    } else alert("bad");
  };

  CheckUser = user => {
    if (user.length >= 3 && user.length <= 15 && user.match("^[a-zA-Z]+$") && this.FindUser(user)){
      return true;
    }
    return false; 
  };

  FindUser = user => {
    for (let x in usersList){
      if(x.userName === user){
        return true;
      }
    }
    alert("user does not exist");
    return false;
  }

  CheckPassword = password => {
    if (!(password.length >= 5 && password.length <= 15)) return false;
    return true;
  };
  render() {
    return (
      <div className="login">
        <label>Username:</label>
        <input ref="userName" />
        <label>Password:</label>
        <input ref="password" type="password" />
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // filter only the reqiered props that we will use in the App component
  // then we can access them inside the class as: this.props.count & this.props.name
  return {
    name: state.userReducer.user.userName
  };
};

const reduxApp = connect(mapStateToProps)(Login);
export default reduxApp;
