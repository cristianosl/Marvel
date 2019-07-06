import * as React from "react";
import { DataContainer, Character } from "../../models/index";
import { CharacterItem } from "./CharacterItem";
import { Grid } from "@material-ui/core";
import './CharacterContainer.css';

export const CharacterContainer: React.FC<
  DataContainer<Character>
> = characterDataContainer => {
  return (
    <Grid container className="character-container" spacing={2}>
      {characterDataContainer.results &&
        characterDataContainer.results.map(character => {
          return <CharacterItem character={character} key={character.id} />;
        })}
    </Grid>
  );
};
