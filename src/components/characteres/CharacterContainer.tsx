import * as React from "react";
import { CharacterDataContainer } from "../../models/characters";
import { CharacterItem } from "./CharacterItem";
import { Grid } from "@material-ui/core";
import './CharacterContainer.css';

export const CharacterContainer: React.FC<
  CharacterDataContainer
> = characterDataContainer => {
  return (
    <Grid container className="character-container" spacing={2}>
      {characterDataContainer.results &&
        characterDataContainer.results.map(character => {
          return <CharacterItem {...character} key={character.id} />;
        })}
    </Grid>
  );
};
