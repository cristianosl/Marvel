import React from "react";
import "./CharacterDetailPicture.css";
export interface IProps {
  src: string;
  alt: string;
}
export class CharacterDetailPicture extends React.Component<IProps> {
  render() {
    return (
      <div className="character-detail__picture">
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}
