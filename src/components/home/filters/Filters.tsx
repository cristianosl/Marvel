import React from "react";
import { NivelFilter } from "./NivelFilter";
import "./Filters.css";
import { Grid, Button } from "@material-ui/core";
import { NivelOption } from "../../../models/index";
import { GenericService } from "../../../services";
import { IResource } from "../../../interfaces";
import {
  getNivel1ValuesByQuery,
  getNivel2ValuesByQuery
} from "../../../helpers/character-parameters";
import { ErrorSnackbar } from "../../ui/ErrorSnackbar";

interface IProps {
  onSubmit(nive1: NivelOption[], nivel2: NivelOption[]): void;
  onReset(): void;
}

interface IState {
  nivelOpts1: NivelOption[];
  nivelOpts2: NivelOption[];
  nivel1Values: string[];
  nivel2Values: string[];
  carregando: boolean;
  /**
   * Armazena mensagens de erros
   */
  errorServiceDetails?: Error;
}
/**
 * Container com os dropdowns dos níveis
 */
export class Filters extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const nivel1Values: string[] = getNivel1ValuesByQuery();
    const nivel2Values: string[] = getNivel2ValuesByQuery();
    this.state = {
      carregando: false,
      nivel1Values: nivel1Values,
      nivel2Values: nivel2Values,
      nivelOpts1: [
        new NivelOption("/comics", "Comics"),
        new NivelOption("/series", "Series"),
        new NivelOption("/events", "Events")
      ],
      nivelOpts2: []
    };
    this.atualizarNivel2ByNivel1(nivel1Values);
  }

  handleChangeNivel1(event: React.ChangeEvent<{ value: unknown }>) {
    //Endpoints que serão consultados
    const nivelOpts = event.target.value as string[];

    // Limpa no nível 2
    const nivel2Opts: NivelOption[] = [];

    // Atualiza state
    this.setState({
      nivel1Values: nivelOpts,
      nivel2Values: [],
      nivelOpts2: nivel2Opts,
      carregando: true
    });

    this.atualizarNivel2ByNivel1(nivelOpts);
  }

  atualizarNivel2ByNivel1(nivel1Opts: string[]) {
    // Limpa no nível 2
    const nivel2Opts: NivelOption[] = [];
    // Carrega os novos dados
    nivel1Opts.forEach(async endpoint => {
      try {
        const service = new GenericService<IResource>(endpoint);
        const models = await service.getModels();
        const niveis = models.map(
          model =>
            new NivelOption(model.id.toString(), model.title, model, endpoint)
        );
        nivel2Opts.push(...niveis);
        this.setState({
          nivelOpts2: nivel2Opts,
          carregando: false
        });
      } catch (error) {
        this.setState({
          errorServiceDetails: error
        });
      }
    });
  }

  handleChangeNivel2(event: React.ChangeEvent<{ value: unknown }>) {
    this.setState({
      nivel2Values: event.target.value as string[]
    });
  }

  onSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const sel1 = this.state.nivelOpts1.filter(
      item => this.state.nivel1Values.indexOf(item.value) >= 0
    );
    const sel2 = this.state.nivelOpts2.filter(
      item => this.state.nivel2Values.indexOf(item.value) >= 0
    );

    this.props.onSubmit(sel1, sel2);
  }
  onReset(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({
      nivel1Values: [],
      nivel2Values: []
    });
    this.props.onReset();
  }

  render() {
    return (
      <Grid className="filters" container spacing={2} alignItems="flex-end">
        <Grid item xs={12} sm={5}>
          <NivelFilter
            onChange={this.handleChangeNivel1.bind(this)}
            nivelValues={this.state.nivel1Values}
            nivelOpts={this.state.nivelOpts1}
            label="1º Nível"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <NivelFilter
            onChange={this.handleChangeNivel2.bind(this)}
            nivelValues={this.state.nivel2Values}
            nivelOpts={this.state.nivelOpts2}
            label="2º Nível"
            disabled={this.state.carregando}
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button
            variant="contained"
            fullWidth
            disabled={this.state.carregando}
            onClick={this.onSubmit.bind(this)}
          >
            Buscar
          </Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button
            variant="contained"
            fullWidth
            disabled={this.state.carregando}
            onClick={this.onReset.bind(this)}
          >
            Limpar
          </Button>
          {this.state && this.state.errorServiceDetails && (
            <ErrorSnackbar
              message={this.state.errorServiceDetails.message}
              open={true}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}
