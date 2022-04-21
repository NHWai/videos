import React, { Component } from "react";
import styled from "styled-components";

export default class Searchbar extends Component {
  state = { term: "" };

  onTypeChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onSubmitChange = (e) => {
    e.preventDefault();
    this.props.form(this.state.term);
  };

  render() {
    return (
      <SearchContainer>
        <Form onSubmit={this.onSubmitChange}>
          <Input
            value={this.state.term}
            name="term"
            onChange={this.onTypeChange}
            type="text"
            placeholder="Search Here"
          />
        </Form>
      </SearchContainer>
    );
  }
}

const SearchContainer = styled.div`
  margin-top: 10px;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;
