import React from "react";
import { Layout } from "../layouts/Layout";
import { GenericService } from "../../services";
import { Character } from "../../models";
import { IPropsRouterPage } from "../../interfaces";
import { ErrorSnackbar } from "../ui/index";

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
        this.setState({
          character: model
        });
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
        [{this.state && this.state.character && this.state.character.id}]
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
