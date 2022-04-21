import React, { Component } from "react";
import styledComponents from "styled-components";
import VideoItem from "./VideoItem";

export default class VideoLists extends Component {
  render() {
    const video = this.props.videoLists.map((item) => (
      <VideoItem
        key={item.id.videoId}
        video={item}
        selected={this.props.selected}
      />
    ));

    return <div>{video}</div>;
  }
}
