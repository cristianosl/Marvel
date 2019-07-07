import React from "react";
import { CharacterParameters, Character } from "../../models/characters";
import { CharacterContainer } from "../characteres/CharacterContainer";
import { PaginationCharacters } from "../ui/PaginationCharacters";
import { CharactersService } from "../../services";
import { Layout } from "../layouts/Layout";
import { Filters } from "../ui";
import { DataWrapper } from "../../models";
import { IPropsRouterPage } from "../../interfaces";
import { ErrorSnackbar } from "../ui/index";

/**
 * Interface para os parâmetros que poderão se chamados na URL
 */
interface TParams {}

/**
 * Interface para o state
 */
interface IAppState {
  /**
   * DataWrappers de personagens
   */
  characterDataWrapper?: DataWrapper<Character>;

  /**
   * Informa se a página está carregando
   */
  carregando: boolean;

  /**
   * Armazena mensagens de erros
   */
  errorServiceDetails?: Error;
}

/**
 * Component inicial
 */
export class Home extends React.Component<
  IPropsRouterPage<TParams>,
  IAppState
> {
  constructor(props: IPropsRouterPage<TParams>) {
    super(props);

    this.state = {
      carregando: false
    };
  }

  componentDidMount() {
    let params = new CharacterParameters();
    this.consultarDados(params);
  }

  onClickPagination(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    offset: number
  ) {
    let params = new CharacterParameters();
    params.offset = offset;
    this.consultarDados(params);
  }

  consultarDados(params: CharacterParameters) {
    this.setState({
      carregando: true
    });
    let service = new CharactersService(params);
    service
      .getDataWrapper()
      .then(data => {
        this.setState({
          characterDataWrapper: data.data,
          carregando: false
        });
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
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
      <Layout
        className={
          this.state.carregando
            ? "container container--carregando"
            : "container"
        }
      >
        <Filters />
        {this.state.characterDataWrapper &&
          this.state.characterDataWrapper.data && (
            <CharacterContainer {...this.state.characterDataWrapper.data} />
          )}
        {this.state.characterDataWrapper &&
          this.state.characterDataWrapper.data &&
          typeof this.state.characterDataWrapper.data.total === "number" && (
            <PaginationCharacters
              limit={this.state.characterDataWrapper.data.limit}
              offset={this.state.characterDataWrapper.data.offset}
              total={this.state.characterDataWrapper.data.total}
              onClick={this.onClickPagination.bind(this)}
            />
          )}
        {!this.state.characterDataWrapper && <h3>Nenhum resultado encontrado</h3>}
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
