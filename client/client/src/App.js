import React, { Component } from "react";
import { Well } from "react-bootstrap";

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

          {/* axios.get('http:localhost:3001/products')
          .then(res => console.log(res.data)) */}

          {/* $.get('') */}

          {/* fetch() */}
        </div>
      </div>
    );
  }
}

export default App;
