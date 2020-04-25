import React, { Component, Fragment } from "react";

export default class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        const { Countries } = data;
        this.setState({ items: Countries });
        console.log(this.state.items);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row mt-5">
            <CovidItem items={this.state.items} />
          </div>
        </div>
      </Fragment>
    );
  }
}

class CovidItem extends Component {
  render() {
    return (
      <Fragment>
        {this.props.items.map((item) => (
          <div className="col-md-4 mt-3">
            <div className="card mb-3">
              <div className="card-body">
                <div className="card-title">
                  <h5>{item.Country}</h5>
                </div>
                Total Infected : {item.TotalConfirmed}
                Total Recovered : {item.TotalRecovered}
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
