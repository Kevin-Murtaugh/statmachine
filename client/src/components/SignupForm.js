import React, { Component } from "react";
import axios from "axios";
const signupStyle = {
  border: "2px solid gold",
  padding: "2px",
  margin: "4px",
  fontSize: "2em"
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
            <div id = "entry-title-pad">
            <label htmlFor="name">Name: </label>
            </div>
            <input
              type="text"
              name="name"
            value={this.state.name}
            onChange={this.onTextChange}
          />
          <br />
          <div id = "entry-title-pad">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onTextChange}
          />
          </div>
          <br />
          <div id = "entry-title-pad">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onTextChange}
          />
          </div>
          <br />
          <div id = "entry-title-pad">
          <label htmlFor="email">Phone Number: </label>
          </div>
          <div id = "entry-field-pad">
          <input
            type="text"
            name="phone_number"
            value={this.state.phone_number}
            onChange={this.onTextChange}
          />
          </div>
          <button onClick={this.onSubmit}>Submit</button>
        </form>  <br />
      </div>
    );
  }
}
