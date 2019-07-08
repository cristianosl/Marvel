import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Input,
  Checkbox,
  ListItemText
} from "@material-ui/core";
import "./NivelFilter.css";
import { NivelOption } from "../../../models";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

interface INivelProps {
  label: string;
  nivelOpts: NivelOption[];
  nivelValues: string[];
  onChange(event: React.ChangeEvent<{ value: unknown }>): void;
  disabled?: boolean;
}

/**
 * Dropdowns de niveis
 *
 * @param props Propriedades
 */
export function NivelFilter(props: INivelProps) {
  const findByValue = (value: string) => (nivelValue: string) =>
    value === nivelValue;

  /** Formata os valores selecionados para exibição  */
  const getRenderValue = (selected: unknown) => {
    const selecionados = selected as string[];
    // console.log("selecionados", selecionados);
    // console.log("props.nivelOpts", props.nivelOpts);
    /** Armazena os textos dos itens selecionados */
    const selecionadosTexts = selecionados.map(itemValue => {
      const itemLocalizado = props.nivelOpts.find(
        item => item.value === itemValue
      );
      if (itemLocalizado) return itemLocalizado.text;
      return false;
    });
    /** Retorna separados por "," */
    if (selecionadosTexts.length > 0) return selecionadosTexts.join(", ");
  };

  return (
    <FormControl className="form-control" disabled={props.disabled}>
      <InputLabel htmlFor="select-multiple-checkbox" className="label">
        {props.label}
      </InputLabel>
      <Select
        multiple
        value={props.nivelValues}
        onChange={props.onChange}
        input={<Input id="select-multiple-checkbox" />}
        renderValue={getRenderValue}
        MenuProps={MenuProps}
        className="filter-select"
      >
        {props.nivelOpts.map(nivelOpt => (
          <MenuItem
            key={nivelOpt.value}
            value={nivelOpt.value}
            className="menu-item"
          >
            <Checkbox
              checked={
                props.nivelValues.find(findByValue(nivelOpt.value)) !==
                undefined
              }
            />
            <ListItemText primary={nivelOpt.text} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
