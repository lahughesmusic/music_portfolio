import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    // LAHUGHESMUSIC
    const fontGradient = {
      marginTop: "8px",
      marginLeft: "30px",
      fontSize: "40px",
      background: "-webkit-linear-gradient(darkgray, white, black)",
      webkitBackgroundClip: "text",
      webkitTextFillColor: "transparent"
    };

    return (
      <div className="header navbar-wrapper">
        {/* LAHUGHESMUSIC */}
        <nav className="navbar">
          <Link className="navbar-brand" href="#">
            <div className="lahughesmusic-headerfont">
              <h2 style={fontGradient}>LAHughesMusic</h2>
            </div>
            <div className="left">
              <Link className="nav-item left navbar nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link" to="/credits">
                Credits
              </Link>
              <Link className="nav-item nav-link" to="/listen">
                Listen
              </Link>
              <Link className="nav-item nav-link" to="/watch">
                Watch
              </Link>

              <Link className="nav-item nav-link" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link" to="/contact">
                Contact
              </Link>
            </div>
          </Link>

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

          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Link
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div> */}
        </nav>
      </div>
    );
  }
}
