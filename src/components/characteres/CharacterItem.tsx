import * as React from "react";
import { Character, Image } from "../../models/index";
import { Grid, Paper } from "@material-ui/core";
import "./CharacterItem.css";

export const CharacterItem: React.FC<Character> = character => {
  let i = new Image(character.thumbnail.path, character.thumbnail.extension);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Paper className="character-item">
        <h3 className="character-item__name">{character.name}</h3>
        <div className="character-item__thumbnail-fullpath">
          <img src={i.getFullPath()} alt={character.name} />
        </div>
        {/* character.description && (
          <div className="character-item__description">
            {character.description}
          </div>
        ) */}
      </Paper>
    </Grid>
  );
};
