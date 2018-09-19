import React, { Component } from 'react';
import "./style.css";
import navbar from "./Components/navbar";
import header from "./Components/header";

class App extends Component {
  render() {
    return (
      <div>
        <navbar>NavbarTest1 NavbarTest2 NavbarTest3</navbar>
        <header>The Olivas Family</header>
      </div>
    );
  }
}

export default App;
