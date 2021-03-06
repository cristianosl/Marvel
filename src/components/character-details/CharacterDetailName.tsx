import React from "react";
import "./CharacterDetailName.css";
export interface IProps {
  name: string;
}
export class CharacterDetailName extends React.Component<IProps> {
  render() {
    return <h1 className="character-detail__name">{this.props.name}</h1>;
  }
}
