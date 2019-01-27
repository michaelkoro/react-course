import React, { Component } from "react";
import usersList from "../../model/users-list";


class Register extends Component {
  register = () => {
    let userName = this.refs.userName.value;
    let firstName = this.refs.Firstname.value;
    let lastName =  this.refs.LastName.value;
    let password = this.refs.password.value;
    let country = this.refs.Country.value;
    if(this.CheckNameValidity(firstName) && this.CheckNameValidity(lastName) &&
    this.CheckUserValidity(userName) && this.CheckPassword(password)){
      let user = {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        password: password,
        country: country
      }
      usersList.push(user);
      alert("user registered");
      console.log(usersList);
    }
    else alert("one or more of the fields are wrong");
  };

  CheckNameValidity  = name => {
      if (name.length >= 2 && name.length <= 15 && name.match("^[a-zA-Z]+$"))
        return true;
      return false;
    };

  CheckUserValidity = user => {
    if (user.length >= 3 && user.length <= 15 && user.match("^[a-zA-Z]+$"))
        return true;
      return false;
  };
  CheckPassword = password => {
    if (!(password.length >= 5 && password.length <= 15)) return false;
    return true;
  };

  render() {
    return( 
    <div>
      <label>Firstname:</label>
      <input ref="Firstname" />
      <br/>
      <br/>
      <label>Lastname:</label>
      <input ref="LastName" />
      <br/>
      <br/>
      <label>Username:</label>
      <input ref="userName" />
      <br/>
      <br/>
      <label>Password:</label>
      <input ref="password" type="password" />
      <br/>
      <br/>
      <label>Country:</label>
      <input ref="Country"/>
      <hr />
      <button onClick={this.register}>Register</button>
    </div>
    );
  }
}
export default Register;
