import React, { Component } from "react";

export default class Test extends Component {
  componentDidMount() {
    console.log("componentDidMount...");
  }

  componentWillMount() {
    console.log("componentWillMount...");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componenwillreceiveprops....");
  }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}
