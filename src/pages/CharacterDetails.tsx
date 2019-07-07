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

/**
 * Parâmetros da URL
 */
type TParams = { id: string };

interface IState {
  character?: Character;
  errorServiceDetails?: Error;
}

// params: RouteComponentProps<TParams>
export class CharacterDetails extends React.Component<
  IPropsRouterPage<TParams>,
  IState
> {
  // constructor(props: IPropsRouterPage<TParams>) {
  //   super(props);
  // }

  componentDidMount() {
    // const { match }: RouteComponentProps<TParams> = props.params;
    // console.log(props.match.params);
    const characterId = parseInt(this.props.match.params.id);

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
              model.series,
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
      });
  }

  render() {
    return (
      <Layout className="container">
        <div className="btn-back">
          <a href="http://">Todos personagens</a>
        </div>
        {this.state && this.state.character && (
          <CharacterDetailContainer>
            <CharacterDetailPicture
              src={this.state.character.thumbnail.getFullPath()}
              alt={this.state.character.name}
            />
            <CharacterDetailName name={this.state.character.name} />
            <CharacterDetailId id={this.state.character.id} />
            <CharacterDetailResources>
              <div className="character-detail__resources__item">
                <div className="character-detail__resources__item__name">
                  Comics:
                </div>
                <div className="character-detail__resources__item__description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi numquam voluptatum, perspiciatis laboriosam hic eligendi
                  sint atque alias ad voluptatibus non corporis? Vero dolorem
                  officia alias molestiae voluptatum? Asperiores, fuga.
                </div>
              </div>
              <div className="character-detail__resources__item">
                <div className="character-detail__resources__item__name">
                  Stories:
                </div>
                <div className="character-detail__resources__item__description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi numquam voluptatum, perspiciatis laboriosam hic eligendi
                  sint atque alias ad voluptatibus non corporis? Vero dolorem
                  officia alias molestiae voluptatum? Asperiores, fuga.
                </div>
              </div>
              <div className="character-detail__resources__item">
                <div className="character-detail__resources__item__name">
                  Events:
                </div>
                <div className="character-detail__resources__item__description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi numquam voluptatum, perspiciatis laboriosam hic eligendi
                  sint atque alias ad voluptatibus non corporis? Vero dolorem
                  officia alias molestiae voluptatum? Asperiores, fuga.
                </div>
              </div>
              <div className="character-detail__resources__item">
                <div className="character-detail__resources__item__name">
                  Series:
                </div>
                <div className="character-detail__resources__item__description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi numquam voluptatum, perspiciatis laboriosam hic eligendi
                  sint atque alias ad voluptatibus non corporis? Vero dolorem
                  officia alias molestiae voluptatum? Asperiores, fuga.
                </div>
              </div>
            </CharacterDetailResources>

            <div className="detail__picture__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              illum distinctio inventore. Enim autem molestias eligendi,
              laudantium veniam sunt maiores facere cupiditate quia, hic, eius
              unde in quos illum voluptas.
            </div>
          </CharacterDetailContainer>
        )}
        <div>[{this.props.match.params.id}] Detalhe do personagem</div>
        {(!this.state || this.state.character === undefined) && (
          <h3>O personagem selecionado não foi encontrado</h3>
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
