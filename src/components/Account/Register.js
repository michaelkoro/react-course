import React, { Component } from "react";
import usersList from "../../model/users-list";
import CountryName from "../Country/Name";
import CountryFlag from "../Country/Flag";
import CountryDropDown from "../Country/DropDown";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: [], selectedCountry: undefined };
    this.GetCounries();
  }

  async GetCounries() {
    let res = await fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;flag;"
    );
    let body = await res.json();
    this.setState({ countries: body });
  }

  register = () => {
    let userName = this.refs.userName.value;
    let firstName = this.refs.Firstname.value;
    let lastName = this.refs.LastName.value;
    let password = this.refs.password.value;
    let country = this.refs.Country.value;
    if (
      this.CheckNameValidity(firstName) &&
      this.CheckNameValidity(lastName) &&
      this.CheckUserValidity(userName) &&
      this.CheckPassword(password)
    ) {
      let user = {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        password: password,
        country: country
      };
      usersList.push(user);
      alert("user registered");
      console.log(usersList);
    } else alert("one or more of the fields are wrong");
  };

  ChangeSelectedCountry = CountryName => {
    this.setState({
      selectedCountry: this.state.countries.find(e => CountryName === e.name)
    });
  };

  CheckNameValidity = name => {
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
    return (
      <div>
        <label>Firstname:</label>
        <input ref="Firstname" />
        <br />
        <br />
        <label>Lastname:</label>
        <input ref="LastName" />
        <br />
        <br />
        <label>Username:</label>
        <input ref="userName" />
        <br />
        <br />
        <label>Password:</label>
        <input ref="password" type="password" />
        <br />
        <br />
        <CountryDropDown
          countryArray={this.state.countries}
          ChangeSelectedCountry={this.ChangeSelectedCountry}
        />

        <hr />

        {this.state.selectedCountry ? (
          <div>
            <CountryName countryName={this.state.selectedCountry.name} />
            <CountryFlag countryFlag={this.state.selectedCountry.flag} />
          </div>
        ) : (
          <div> no country selected</div>
        )}

        <hr />
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}
export default Register;
