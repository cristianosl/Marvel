import React from "react";
import { NivelFilter } from "./NivelFilter";
import "./Filters.css";
import { Grid } from "@material-ui/core";
export function Filters() {
  const nivelOpts1 = ["Comics", "Events", "Series"];
  const nivelOpts2 = ["Comics2", "Events2", "Series2"];
  return (
    <Grid className="filters" container spacing={2}>
      <Grid item xs={12} sm={6}>
        <NivelFilter nivelOpts={nivelOpts1} label="1º Nível" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <NivelFilter nivelOpts={nivelOpts2} label="2º Nível" />
      </Grid>
    </Grid>
  );
}
