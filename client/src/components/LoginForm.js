import React, { Component } from "react";
import axios from "axios";

const loginStyle = {
    border: "5px solid white",
    // marginLeft: "10px",
    color: "white",
    fontSize: "2em",
    align: "center",
    // padding: "10px",
    // width: "70%",
    // height: "250px"
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
        <div id= "main-content-body">  
            <form style={{width: '50%', margin: "0 auto", ...loginStyle}}>
              {/* <div className = "form-title">
                <form style={{textAlign:"left", ...loginStyle}}> */}
                  {/* <label for="exampleFormTitle1" >Please Login:</label> */}
                {/* <form style={{ "text-align":left}}>Please Log in:</style></div> */}
  
              <div className="form-group">
                <label for="exampleInputEmail1" >Please Login:.....E-mail address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.onTextChange} aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email}/>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.onTextChange}  placeholder="Password" name="password" value={this.state.password}/>
            </div>

          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </form>
        </div>
    );
  }
}
