import React from "react";
import "./CharacterDetailDescription.css";
import { Container } from "@material-ui/core";
export class CharacterDetailContainer extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" className="character-detail">
        {this.props.children}
      </Container>
    );
  }
}
