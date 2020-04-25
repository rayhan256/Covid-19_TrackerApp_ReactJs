import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/App.css";
class Home extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="display-4 text-center text-white judul">
          Welcome To My App
        </h1>
        <Link to="/form">
          <button className="btn btn-primary btn-lg judulBtn">Goto Form</button>
        </Link>
      </div>
    );
  }
}

export default Home;
