import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./component/About";
import Maps from "./component/Maps";
import Home from "./component/Home";
import Form from "./component/Form";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <span className="navbar-brand">Ray's App</span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/">
                    <span className="nav-link">
                      Home <span className="sr-only">(current)</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/maps">
                    <span className="nav-link">Data API Covid 19</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">
                    <span className="nav-link">About</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/maps">
              <Maps />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
