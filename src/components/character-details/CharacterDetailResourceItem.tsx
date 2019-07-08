import React from "react";
import { List } from "../../models";
import "./CharacterDetailResourceItem.css";
export interface IProps {
  itemName: string;
  data: List;
}
export class CharacterDetailResourceItem extends React.Component<IProps> {
  render() {
    const { itemName } = this.props;
    return (
      <div className="character-detail__resources__item">
        <div className="character-detail__resources__item__name">
          {itemName}:
        </div>
        <div className="character-detail__resources__item__description">
          <ul>
            {this.props.data.items.map(item => {
              return <li key={item.resourceURI}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
