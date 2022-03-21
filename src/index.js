import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Rates from "./pages/Rates";
import Contact from "./pages/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/bio">Bio</Link>
              </li>
              <li>
                <Link to="/rates">Rates</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return this.state.isUserAuthenticated ? (
                  <Redirect to="/home" />
                ) : (
                  <Redirect to="/bio" />
                );
              }}
            />
            <Route exact path="/home" component={Home} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/rates" component={Rates} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
