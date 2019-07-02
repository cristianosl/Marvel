import React from "react";
import {
  CharacterDataWrapper,
  CharacterParameters
} from "../../models/characters";
import { CharacterContainer } from "../characteres/CharacterContainer";
import { PaginationCharacters } from "../ui/PaginationCharacters";
import { CharacterService } from "../../services";
import { Layout } from "../layouts/Layout";

/**
 * Interface para as props
 */
interface IAppProps {}
/**
 * Interface para o state
 */
interface IAppState {
  characterDataWrapper: CharacterDataWrapper | null;
  carregando: boolean;
}

/**
 * Component inicial
 */
export class Home extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      characterDataWrapper: null,
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
    let service = new CharacterService(params);
    service
      .getConsulta()
      .then(data => {
        this.setState({
          characterDataWrapper: data.data,
          carregando: false
        });
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      })
      .catch(error => {
        console.log(error);
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
      </Layout>
    );
  }
}
