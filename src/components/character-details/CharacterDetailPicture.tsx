import React from "react";
export interface IProps {
  src: string;
  alt: string;
}
export class CharacterDetailPicture extends React.Component<IProps> {
  render() {
    return (
      <div className="detail__picture">
        <img src={this.props.src} alt={this.props.alt} width="150" />
      </div>
    );
  }
}
