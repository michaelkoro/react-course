import React, { Component } from "react";
import Footer from "./App-footer";
import Header from "./App-header";
import Main from "./App-main";
import "./App.css";

import { BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
