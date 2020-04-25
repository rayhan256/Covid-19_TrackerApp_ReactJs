import React from "react";

export default class About extends React.Component {
  render() {
    const logo = require("../assets/images/about.svg");
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-md-7 mt-5">
              <img src={logo} alt="About" className="img-fluid" />
            </div>
            <div className="col-md-5 mt-5">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">About Me</div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      Name : Rayhan Rahmat Aziz
                    </li>
                    <li className="list-group-item">Age : 20</li>
                    <li className="list-group-item">
                      Addres : Gateway Cicadas, Bandung, Jawa Barat
                    </li>
                    <li className="list-group-item">
                      About :{" "}
                      <p>
                        This Application is only for learning purpose. Included,
                        virtual dom, css, Consuming API
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <h6>Copyright : Rayhan Rahmat Aziz @2020</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
