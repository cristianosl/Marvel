import React from "react";
export class CharacterDetailContainer extends React.Component {
  render() {
    return <div className="character-detail">{this.props.children}</div>;
  }
}
