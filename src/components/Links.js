import React, { Component } from "react";

export default class Links extends Component {
  render() {
    const theme = {
      color: "white",
      fontSize: "30px",
      Index: "1"
    };
    return (
      <div>
        <ul>
          <a href="/about">
            <li style={theme}>ABOUT</li>
          </a>
          <a href="/contact">
            <li style={theme}>CONTACT</li>
          </a>
          <a href="/credits">
            <li style={theme}>CREDITS</li>
          </a>
        </ul>
      </div>
    );
  }
}
