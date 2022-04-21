import Searchbar from "./components/Searchbar";
import styled from "styled-components";
import React from "react";
import youtube from "./components/apis/youtube";
import VideoLists from "./components/VideoLists";
import CurrentVideo from "./components/CurrentVideo";

class App extends React.Component {
  state = { videos: [], selected: "" };

  isSelected = (video) => {
    this.setState({ selected: video });
  };

  formData = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items });
  };
  render() {
    return (
      <Container className="app">
        <Searchbar form={this.formData} />
        <Content>
          <CurrentVideo video={this.state.selected} />
          <VideoLists
            videoLists={this.state.videos}
            selected={this.isSelected}
          />
        </Content>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 10px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  margin: 10px 0;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default App;
