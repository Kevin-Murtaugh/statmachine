import React, { Component } from "react";
import axios from "axios";
const signupStyle = {
  border: "2px solid gold",
  padding: "5px",
  marginLeft: "4px",
  fontSize: "2em",
  align: "center",
  background: "yellow",
  width: "70%"
};

export default class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    phone_number: ""
  };

  onTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phone_number
    };

    axios
      .post("/users/signup", newUser)
      .then(res => {
        this.setState({
          name: "",
          email: "",
          password: "",
          phone_number: ""
        });
        console.log(res.data);
        alert("New User Created!");
      })
      .catch(error => {
        alert(JSON.stringify(error.response.data));
      });
  };

  render() {
    return (
      <div>
        <form style={signupStyle}>
          <h3>New User Signup:</h3>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
            value={this.state.name}
            onChange={this.onTextChange}
          />
          <br />
          <label htmlFor="email">E-mail: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onTextChange}
          />

          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onTextChange}
          />
          <br />
          <label htmlFor="email">Phone Number:    </label>
          <input
            type="text"
            name="phone_number"
            value={this.state.phone_number}
            onChange={this.onTextChange}
          />
          <button onClick={this.onSubmit}>Submit</button>
        </form>  <br />
      </div>
    );
  }
}
