import React, { Component } from "react";
import axios from "axios";


const loginStyle = {
  border: "5px solid white",
  // marginLeft: "180px",
  color: "white",
  fontSize: "2em",
  align: "center",
  // padding: "10px",
  // width: "70%"

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
    return <div id="main-content-body">
      <form style={{ width: '50%', margin: "0 auto", ...loginStyle }}>
          <div className="form-group">
            <label for="name">New Users Sign Up Here: ...Name</label>
            <input type="text" className="form-control" id="name" onChange={this.onTextChange} placeholder="Enter name" name="name" value={this.state.name} />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" onChange={this.onTextChange} placeholder="Enter email" name="email" value={this.state.email} />
          </div>
          <div className="form-group">
            <label for="phone_number">Phone Number</label>
            <input type="text" className="form-control" id="phone_number" onChange={this.onTextChange} placeholder="Enter phone number" name="phone_number" value={this.state.phone_number} />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onTextChange} placeholder="Password" name="password" value={this.state.password} />
          </div>

        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>;
  }
}
