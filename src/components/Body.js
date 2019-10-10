import React, { Component } from "react";

export default class Body extends Component {
  render() {
    const style1 = {
      marginTop: "100px",
      height: "300px"
    };
    const style = {
      marginTop: "0px",
      height: "300px"
    };
    const body = {
      background: "black"
    };
    return (
      <div className="body">
        <img
          alt="Mother of all Lies"
          style={style1}
          src={require("../images/mother.png")}
        />
        <img
          alt="Blue Hour"
          style={style1}
          src={require("../images/bluehour.png")}
        />
        <img
          alt="Curse of Oak Island"
          style={style1}
          src={require("../images/curse.png")}
        />
        <img
          alt="Pitbulls and Parolees"
          style={style}
          src={require("../images/pitbulls.png")}
        />
        <img
          alt="Killer Kids"
          style={style}
          src={require("../images/killerKids.png")}
        />
        <img
          alt="Night Watch"
          style={style}
          src={require("../images/nightwatch.png")}
        />
        <img
          alt="All Summer in a Day"
          style={style}
          src={require("../images/allSummer.png")}
        />
        <img
          alt="Winter Chemistry"
          style={style}
          src={require("../images/winter.png")}
        />
      </div>
    );
  }
}
