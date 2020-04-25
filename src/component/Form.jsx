import React, { Component, Fragment } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      text: "",
      text1: "",
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e) {
    this.setState({ text: e.target.value });
  }

  handlePassword(e) {
    this.setState({ text1: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      username: this.state.text,
      password: this.state.text1,
      text: "",
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container mt-5">
          <h5 className="display-4 text-center">Form Pada React</h5>
          <form className="mt-5" onSubmit={this.handleSubmit} method="post">
            <div className="form-group">
              <input
                type="text"
                onChange={this.handleUsername}
                placeholder="Username"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                onChange={this.handlePassword}
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          <div className="row mt-3">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Hasil Output</div>
                Username : {this.state.username}
                <br />
                Password : {this.state.password}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
