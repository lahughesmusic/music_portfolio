import React, { Component } from "react";
// import EmailForm from "./form/EmailForm";
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
// import axios from "axios";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getContacts } from "../actions/contactActions";
// import moduleName from "../actions/contactActions";
// import uuid from "uuid";
// import { addContact } from "../actions/contactActions";

// import { deleteContact } from "../actions/contactActions";

class Contact extends Component {
  render() {
    const formStyle = {
      marginTop: "70px",
      borderRadius: ".8em",
      color: "lightgrey"
    };
    const input = {
      height: "50px"
    };
    return (
      <div>
        <Helmet bodyAttributes={{ style: "background-color: black" }} />
        <div style={{ marginLeft: "30%", marginRight: "30%" }}>
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
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
