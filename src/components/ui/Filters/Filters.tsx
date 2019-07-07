import React from "react";
import { NivelFilter } from "./NivelFilter";
import "./Filters.css";
import { Grid } from "@material-ui/core";
import { NivelOption } from "../../../models";

/**
 * Container com os dropdowns dos níveis
 */
export function Filters() {
  const nivelOpts1: NivelOption[] = [
    new NivelOption("ComicsV", "ComicsT"),
    new NivelOption("EventsV", "EventsT"),
    new NivelOption("SeriesV", "SeriesT")
  ];
  const nivelOpts2: NivelOption[] = [
    new NivelOption("ComicsV", "ComicsT"),
    new NivelOption("EventsV", "EventsT"),
    new NivelOption("SeriesV", "SeriesT")
  ];
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
