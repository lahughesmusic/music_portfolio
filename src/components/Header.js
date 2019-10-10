import React, { Component } from "react";
import Body from "./Body";

export default class Header extends Component {
  render() {
    // LAHUGHESMUSIC
    const fontGradient = {
      marginTop: "8px",
      marginLeft: "30px",
      fontSize: "40px",
      background: "-webkit-linear-gradient(lightgrey, white, lightblue)",
      webkitBackgroundClip: "text",
      webkitTextFillColor: "transparent"
    };
    const margin = {
      marginLeft: "auto",
      marginRight: "auto"
    };

    return (
      <div style={margin} className="header navbar-wrapper">
        {/* LAHUGHESMUSIC */}
        <nav className="navbar">
          <a className="navbar-brand" href="#">
            <div className="lahughesmusic-headerfont">
              <h2 style={fontGradient}>LAHughesMusic</h2>
            </div>
            <div className="left">
              <a className="nav-item left navbar nav-link active" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="/credits">
                Credits
              </a>
              <a className="nav-item nav-link" href="/listen">
                Listen
              </a>
              <a className="nav-item nav-link" href="/watch">
                Watch
              </a>
              <a className="nav-item nav-link" href="/contact">
                Contact
              </a>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
