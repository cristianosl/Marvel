import * as React from "react";
import { Character, Image } from "../../../models/index";
import { Grid, Paper, Button } from "@material-ui/core";
import "./CharacterItem.css";
import { LinkProps, Link } from "react-router-dom";
import { CSSProperties } from "react";

interface ICharacterItemProps {
  character: Character;
  children?: React.ReactNode;
}

interface ICharacterItemState {
  style: CSSProperties;
}

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} {...props} />
);

/**
 * Componente para exibir um "card" de personagem
 */
export class CharacterItem extends React.Component<
  ICharacterItemProps,
  ICharacterItemState
> {
  character: Character;
  imgRef: React.RefObject<HTMLImageElement>;
  constructor(props: ICharacterItemProps) {
    super(props);

    // Personagem atual
    this.character = props.character;

    // Ref da imagem
    this.imgRef = React.createRef<HTMLImageElement>();

    // Altura padrão da imagem
    this.state = {
      style: {}
    };
  }

  componentDidMount() {
    if (this.imgRef.current) {
      this.imgRef.current.addEventListener("load", e => {
        if (this.imgRef.current) {
          this.setState({
            style: {
              height: this.imgRef.current.width
            }
          });
        }
      });
    }
  }
  render() {
    let i = new Image(
      this.character.thumbnail.path,
      this.character.thumbnail.extension
    );

    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper className="character-item">
          <h3 className="character-item__name">{this.character.name}</h3>
          <div
            className="character-item__thumbnail-fullpath"
            style={this.state.style}
          >
            <img
              ref={this.imgRef}
              src={i.getFullPath()}
              alt={this.character.name}
            />
          </div>
          {/* character.description && (
            <div className="character-item__description">
              {character.description}
            </div>
          ) */}
          <div className="character-details">
            <Button
              component={AdapterLink}
              to={`/character/${this.character.id}`}
              className="character-details__btn"
            >
              Visualizar
            </Button>
          </div>
        </Paper>
      </Grid>
    );
  }
}
