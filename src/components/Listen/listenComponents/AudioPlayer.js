import React, { Component } from "react";

class AudioPlayer extends Component {
  componentWillReceiveProps() {
    this.refs.audio.pause();
    this.refs.audio.load();
    this.refs.audio.play();
  }
  render() {
    return (
      <audio controls controlsList="nodownload" ref="audio">
        <source src={this.props.audiopath} type="audio/ogg" />
        <source src={this.props.audiopath} type="audio/mpeg" />
      </audio>
    );
  }
}

export default AudioPlayer;
