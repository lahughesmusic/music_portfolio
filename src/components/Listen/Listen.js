import React, { Component } from "react";
import Marquee from "./listenComponents/Marquee";
import Mp3Button from "./listenComponents/Mp3Button";
import AudioPlayer from "./listenComponents/AudioPlayer";
import "./functions.js";
import "./listen.css";
import musicData from "./music_data";

export default class Listen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mp3path: "https://song-253.s3.amazonaws.com/",
      mp3name: "8_2.mp3",
      mp3artist: "Lea Hughes",
      audiopath: "https://song-253.s3.amazonaws.com/8_2.mp3",
      mp3autoplay: "autoPlay",
      mp3genre: "",
      soundwaveCssClass: "soundwave-hidden",
      currentButtonId: 0,
      clickedButtonId: "",
      mp3Data: [],
      restartTimer: "no"
    };
  }

  componentWillMount() {
    var mp3title = this.state.mp3name;
    mp3title = mp3title.replace(".mp3", "");
    this.changeMP3 = this.changeMP3.bind(this);
    this.setState(state => ({
      mp3title: mp3title,
      audiopath: state.mp3path + state.mp3name,
      mp3Data: musicData
    }));
  }
  changeMP3(currentButtonId, genre, name, artist) {
    var mp3title = name;
    var mp3name = name;
    mp3title = mp3title
      .replace(".mp3", "")
      .replaceAll("_", " ")
      .toUpperCase();

    this.setState(state => ({
      audiopath: state.mp3path + mp3name,
      mp3title: mp3title,
      mp3artist: artist,
      mp3genre: genre,
      soundwaveCssClass: "soundwave",
      currentButtonId: currentButtonId,
      clickedButtonId: currentButtonId
    }));
  }
  render() {
    return (
      <div className="audio-container">
        <h1>{this.props.title}</h1>
        <Marquee
          mp3artist={this.state.mp3artist}
          mp3genre={this.state.mp3genre}
        >
          {this.state.mp3title}
        </Marquee>
        <section className="mp3list-buttons">
          {this.state.mp3Data.map((mp3, index) => (
            <Mp3Button
              key={index}
              changeMP3={this.changeMP3}
              clickedButtonId={this.state.mp3name}
              mp3={mp3.name}
              artist={mp3.artist}
              genre={mp3.genre}
            />
          ))}
        </section>
        <AudioPlayer audiopath={this.state.audiopath} />
      </div>
    );
  }
}
