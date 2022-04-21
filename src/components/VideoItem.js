import React, { Component } from "react";
import styled from "styled-components";

export default class videoItem extends Component {
  isSelected = (video) => {
    this.props.selected(video);
  };

  render() {
    const { id, snippet } = this.props.video;

    return (
      <Card onClick={() => this.isSelected(this.props.video)}>
        <Image src={snippet.thumbnails.medium.url} alt="snippet" />
        <Content>
          <h4>{snippet.title}</h4>
        </Content>
      </Card>
    );
  }
}

const Card = styled.div`
  max-width: 100%;
  padding: 10px;
  display: flex;
  gap: 10px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

const Image = styled.img`
  display: block;
  width: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  & h3 {
    margin-bottom: 10px;
  }
`;
