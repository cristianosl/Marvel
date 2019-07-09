import React from "react";
import { List } from "../../models";
import "./CharacterDetailResourceItem.css";
import { Grid } from "@material-ui/core";
export interface IProps {
  itemName: string;
  data: List;
}
export class CharacterDetailResourceItem extends React.Component<IProps> {
  render() {
    const { itemName } = this.props;
    return (
      <Grid container className="character-detail__resources__item">
        <Grid item className="character-detail__resources__item__name">
          {itemName}:
        </Grid>
        <Grid item className="character-detail__resources__item__description">
          <ul>
            {this.props.data.items.map(item => {
              return <li key={item.resourceURI}>{item.name}</li>;
            })}
          </ul>
        </Grid>
      </Grid>
    );
  }
}
