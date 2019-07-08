import React from "react";
import { CharacterParameters, Character } from "../models/characters";
import { CharacterContainer } from "../components/home/characteres/CharacterContainer";
import { PaginationCharacters } from "../components/home/pagination/PaginationCharacters";
import { CharactersService } from "../services";
import { Layout } from "../layouts/Layout";
import { Filters } from "../components/home/filters/Filters";
import { DataWrapper, NivelOption } from "../models";
import { IPropsRouterPage } from "../interfaces";
import { ErrorSnackbar } from "../components/ui/ErrorSnackbar";
import {
  getCharacterParametersByNivel2,
  getCharacterParametersByQuery,
  atualizarUrlByParams
} from "../helpers/character-parameters";

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

  /**
   * Parâmetros da consulta atual
   */
  parametrosConsulta: CharacterParameters;
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
      carregando: false,
      parametrosConsulta: getCharacterParametersByQuery()
    };
  }

  componentDidMount() {
    this.consultarDados(this.state.parametrosConsulta);
  }

  onClickPagination(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    offset: number
  ) {
    const params = this.state.parametrosConsulta;
    params.offset = offset;
    this.setState({
      parametrosConsulta: params
    });
    atualizarUrlByParams(params);
    this.consultarDados(params);
  }

  /**
   * Consulta os dados de acordo com os parâmetros informados
   */
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

  /**
   * Ação do botão de enviar dos filtros
   * @param nivel1 Opções selecionadas no nível 1
   * @param nivel2 Opções selecionadas no nível 2
   */
  handleFiltersSubmit(nivel1: NivelOption[], nivel2: NivelOption[]) {
    const params = getCharacterParametersByNivel2(
      this.state.parametrosConsulta,
      nivel2
    );
    this.setState({
      parametrosConsulta: params
    });

    atualizarUrlByParams(params);
    this.consultarDados(params);
  }
  handleOnReset(): void {
    const params = new CharacterParameters();
    this.setState({
      parametrosConsulta: params
    });

    atualizarUrlByParams(params);
    this.consultarDados(params);
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
        <Filters
          onSubmit={this.handleFiltersSubmit.bind(this)}
          onReset={this.handleOnReset.bind(this)}
        />
        {this.state.characterDataWrapper &&
          this.state.characterDataWrapper.data && (
            <CharacterContainer {...this.state.characterDataWrapper.data} />
          )}
        {(!this.state.characterDataWrapper ||
          this.state.characterDataWrapper.data.total === 0) && (
          <h3 style={{ textAlign: "center" }}>Nenhum resultado encontrado</h3>
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
