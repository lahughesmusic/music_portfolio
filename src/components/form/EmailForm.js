import React, { Component } from "react";

export default class EmailForm extends Component {
  render() {
    const formStyle = {
      marginTop: "70px",
      borderRadius: ".8em",
      color: "lightgrey"
    };
    const input = {
      height: "50px"
    };
    const message = {
      height: "100px",
      marginBottom: "10px"
    };
    const button = {
      marginTop: "20px",
      height: "30px",
      fontSize: "15px",
      marginLeft: "400px",
      marginBottom: "30px"
    };

    return (
      <div>
        <div className="card">
          <form>
            <div style={formStyle} className="form-group">
              <label className="lightgrey" for="exampleFormControlInput1">
                Name:
              </label>
              <input
                type="email"
                style={input}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label className="lightgrey" for="exampleFormControlInput1">
                Email address:
              </label>
              <input
                style={input}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label className="lightgrey" for="exampleFormControlTextarea1">
                Message:
              </label>
              <textarea
                style={message}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>

          <a style={button} href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
