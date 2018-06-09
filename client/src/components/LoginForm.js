import React, { Component } from "react";
import axios from "axios";
const loginStyle = {
  border: "3px solid blue",
  padding: "2px",
  margin: "0px",
  fontSize: "2em"
};

export default class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/users/login", user)
      .then(res => {
        this.setState({
          email: "",
          password: ""
        });
        console.log("WOW");
        console.log(res.data);
        const headerInfo = {
          headers: {
            Authorization: res.data.token
          }
        };

        axios.get("/dashboard", headerInfo).then(response => {
          // window.location = response.data.redirect;
          // console.log(response.data.redirect);
          // console.log(response.data);
          // document.querySelector("html").innerHTML = response.data;
          // window.location = "localhost:3000/crypto.html";

          /*               */
          window.open("/crypto.html", "_self");
          /*               */

          //cross browser
          // window.URL = window.URL || window.webkitURL;

          // var blob = new Blob(response.data, {
          //   type: "text/html",
          //   Authorization: res.data.token
          // });

          // window.open(window.URL.createObjectURL(blob));

          // var link = document.createElement("link");
          // link.rel = "stylesheet";
          //createObjectURL returns a blob URL as a string.
          // link.href = window.URL.createObjectURL(blob);
          // document.body.appendChild(link);
        });
        // alert("Logged In!");
        // var xhr = new XMLHttpRequest();
        // xhr.open("GET", "/dashboard", true);
        // xhr.setRequestHeader("Authorization", res.data.token);
        // xhr.responseType = "blob";
        // xhr.onreadystatechange = function() {
        //   if (xhr.readyState == 4) {
        //     var blob = xhr.response;
        //     var win = window.open("_blank");
        //     var url = URL.createObjectURL(blob);
        //     win.location = url;
        //   }
        // };
      })
      .catch(error => {
        alert(JSON.stringify(error.response.data));
      });
  };

  render() {
    return (
      <div>
        <form style={loginStyle}>
          <h3>Please Log In:</h3> 
            <div id = "entry-title-pad">
              <label htmlFor="email">Email: </label>
            </div>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onTextChange}
          />
          
          <br />
            <div id = "entry-title-pad">
              <label htmlFor="password">Password: </label>
            </div>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onTextChange}
          />
         
          <button onClick={this.onSubmit}>Submit</button>
        </form> 
        <br />
      </div>
    );
  }
}
