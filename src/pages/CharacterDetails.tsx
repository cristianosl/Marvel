import React from "react";
import { Layout } from "../layouts/Layout";
import { GenericService } from "../services";
import { Character, Image } from "../models";
import { IPropsRouterPage } from "../interfaces";
import { ErrorSnackbar } from "../components/ui/ErrorSnackbar";
import { CharacterDetailContainer } from "../components/character-details/CharacterDetailContainer";
import { CharacterDetailPicture } from "../components/character-details/CharacterDetailPicture";
import { CharacterDetailName } from "../components/character-details/CharacterDetailName";
import { CharacterDetailId } from "../components/character-details/CharacterDetailId";
import { CharacterDetailResources } from "../components/character-details/CharacterDetailResources";
import { CharacterDetailResourceItem } from "../components/character-details/CharacterDetailResourceItem";
import { CharacterDetailDescription } from "../components/character-details/CharacterDetailDescription";
import { Grid } from "@material-ui/core";

/**
 * Parâmetros da URL
 */
type TParams = { id: string };

interface IState {
  character?: Character;
  errorServiceDetails?: Error;
  carregando: boolean;
}

// params: RouteComponentProps<TParams>
export class CharacterDetails extends React.Component<
  IPropsRouterPage<TParams>,
  IState
> {
  componentDidMount() {
    const characterId = parseInt(this.props.match.params.id);
    this.setState({
      carregando: true
    });
    // Realiza uma consulta por personagem
    const service = new GenericService<Character>(`/characters/${characterId}`);
    service
      .getModels()
      .then(models => {
        // Caso tenha retornado algum modelo
        if (models.length > 0) {
          return models[0];
        }
      })
      .then(model => {
        if (model) {
          this.setState({
            character: new Character(
              model.id,
              model.name,
              model.description,
              model.modified,
              new Image(model.thumbnail.path, model.thumbnail.extension),
              model.resourceURI,
              model.comics,
              model.stories,
              model.events,
              model.series
            )
          });
        }
      })
      .catch((error: Error) => {
        this.setState({
          errorServiceDetails: error
        });
      })
      .finally(() => {
        this.setState({
          carregando: false
        });
      });
  }

  render() {
    return (
      <Layout className="container">
        {/* <div className="btn-back">
          <a href="http://">Todos personagens</a>
        </div> */}

        {(!this.state || this.state.character === undefined) && (
          <h3>O personagem selecionado não foi encontrado</h3>
        )}
        {this.state && this.state.character && (
          <CharacterDetailContainer>
            <Grid container>
              <Grid item>
                <CharacterDetailPicture
                  src={this.state.character.thumbnail.getFullPath()}
                  alt={this.state.character.name}
                />
              </Grid>
              <Grid item>
                <CharacterDetailName name={this.state.character.name} />
                <CharacterDetailId id={this.state.character.id} />
              </Grid>
            </Grid>
            {this.state.character.description && (
              <CharacterDetailDescription
                description={this.state.character.description}
              />
            )}
            <CharacterDetailResources>
              {this.state.character.comics &&
                this.state.character.comics.returned > 0 && (
                  <CharacterDetailResourceItem
                    itemName="Comics"
                    data={this.state.character.comics}
                  />
                )}
              {this.state.character.stories &&
                this.state.character.stories.returned > 0 && (
                  <CharacterDetailResourceItem
                    itemName="Stories"
                    data={this.state.character.stories}
                  />
                )}
              {this.state.character.events &&
                this.state.character.events.returned > 0 && (
                  <CharacterDetailResourceItem
                    itemName="Events"
                    data={this.state.character.events}
                  />
                )}
              {this.state.character.series &&
                this.state.character.series.returned > 0 && (
                  <CharacterDetailResourceItem
                    itemName="Series"
                    data={this.state.character.series}
                  />
                )}
            </CharacterDetailResources>
          </CharacterDetailContainer>
        )}

        {this.state && this.state.errorServiceDetails && (
          <ErrorSnackbar
            message={this.state.errorServiceDetails.message}
            open={true}
          />
        )}
      </Layout>
    );
  }
}
