import React from "react";
import "./CharacterDetailDescription.css";
export interface IProps {
  description?: string;
}
export class CharacterDetailDescription extends React.Component<IProps> {
  render() {
    return (
      <div className="character-detail__description">
        {this.props.description && <div>{this.props.description}</div>}
      </div>
    );
  }
}
