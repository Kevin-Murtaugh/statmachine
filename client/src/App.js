import React, { Component } from "react";
// import { Well } from "react-bootstrap";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import styles from './App.css';

// const styles = {
//   wrapper: {
//     textAlign:'center',
//     width: "60%",
//     margin: "0 auto"
//   }
//};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper" style={styles.wrapper}>
          <div id = "main-content-body">
          <div class= "container">
            <div class = "jumbotron">
              <div class = "row">
                <div class = "col-12">
                    <h1>Welcome To Stat Machine</h1>
                      <h3> You pick the data, we figure out how chart it. </h3>
                  </div>
              </div>
              </div>
            </div>
        </div>
     
          <LoginForm />
          <SignupForm />
        </div> 
      </div>
    );
  }
}

export default App;
