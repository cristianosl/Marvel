import React from "react";
export interface IProps {
  id: number;
}
export class CharacterDetailId extends React.Component<IProps> {
  render() {
    return (
      <div className="character-detail__id">
        <span>ID:</span>
        {this.props.id}
      </div>
    );
  }
}
