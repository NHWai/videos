import React, { Component } from "react";
import styled from "styled-components";

export default class CurrentVideo extends Component {
  render() {
    const { id, snippet } = this.props.video;

    if (this.props.video) {
      return (
        <VideoContainer>
          <IframeContain>
            <Iframe
              src={`https://www.youtube.com/embed/${id.videoId}`}
              allowfullscreen
            ></Iframe>
          </IframeContain>
          <Content>
            <h3>{snippet.title}</h3>
            <p>{snippet.description}</p>
          </Content>
        </VideoContainer>
      );
    }
  }
}

const VideoContainer = styled.div`
  padding-top: 10px;
  min-width: 600px;
  width: 100%;
`;

const IframeContain = styled.div`
overflow-hidden;
max-height:80%;
padding-top: 56.25%;
position: relative;
`;

const Iframe = styled.iframe`
  border: 0;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  h3 {
    margin-bottom: 10px;
  }
`;
