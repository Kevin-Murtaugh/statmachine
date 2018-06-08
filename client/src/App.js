import React, { Component } from "react";
// import { Well } from "react-bootstrap";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const styles = {
  wrapper: {
    width: "60%",
    margin: "0 auto"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper" style={styles.wrapper}>
          <h2>Welcome To Stat Machine</h2>
          <LoginForm />
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default App;
