import React, { Component } from "react";
import EmailForm from "./form/EmailForm";
import { Helmet } from "react-helmet";

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet bodyAttributes={{ style: "background-color: black" }} />
        <EmailForm />
      </div>
    );
  }
}

export default Contact;
