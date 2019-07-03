import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Input,
  makeStyles,
  Theme,
  createStyles,
  Checkbox,
  ListItemText
} from "@material-ui/core";
import { ThemeMarvel } from "../ThemeMarvel";
import "./NivelFilter.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

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
  nivelOpts: string[];
}

export function NivelFilter(props: INivelProps) {
  const classes = useStyles();
  const [nivelValue, setNivel] = React.useState<string[]>([]);

  function handleChangeNivel(event: React.ChangeEvent<{ value: unknown }>) {
    setNivel(event.target.value as string[]);
  }

  return (
    <FormControl className="form-control">
      <InputLabel htmlFor="select-multiple-checkbox" className="label">
        {props.label}
      </InputLabel>
      <Select
        multiple
        value={nivelValue}
        onChange={handleChangeNivel}
        input={<Input id="select-multiple-checkbox" />}
        renderValue={selected => (selected as string[]).join(", ")}
        MenuProps={MenuProps}
        className="filter-select"
      >
        {props.nivelOpts.map(nivelOpt => (
          <MenuItem key={nivelOpt} value={nivelOpt} className="menu-item">
            <Checkbox checked={nivelValue.indexOf(nivelOpt) > -1} />
            <ListItemText primary={nivelOpt} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
