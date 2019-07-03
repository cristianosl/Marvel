import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, CharacterDetails } from "./pages/index";

/**
 * Component inicial
 */
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/character/:id" component={CharacterDetails} />
      </Router>
    );
  }
}

export default App;
