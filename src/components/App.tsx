import React from "react";
import "./App.css";
import { CharacterService } from "../services";
import { Character } from "../models";
import { CharacterParameters } from "../models/characters";
import { Button } from "@material-ui/core";

interface IProps {}
interface IApp {
  characters: Character[];
}

class App extends React.Component<IProps, IApp> {
  constructor(props: any) {
    super(props);

    let character: Character[] = [];
    this.state = {
      characters: character
    };

    let service = new CharacterService();
    let params = new CharacterParameters();
    params.comics = [43495, 43506];
    params.series = [16450, 7524];
    // params.events = [269];
    service
      .getCharacters(params)
      .then(characters => {
        this.setState({
          characters: characters
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.characters.map(character => {
          return character.name + ";";
        })}
        {this.state.characters.length === 0 && "Sem resultados"}

        <Button variant="contained" color="primary">
          Hello
        </Button>
      </div>
    );
  }
}

export default App;
