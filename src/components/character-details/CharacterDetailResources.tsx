import React, { ReactNode } from "react";
import "./CharacterDetailResources.css";
export interface IProps {
  children?: ReactNode;
}
export class CharacterDetailResources extends React.Component<IProps> {
  render() {
    return (
      <div className="character-detail__resources">{this.props.children} </div>
    );
  }
}
