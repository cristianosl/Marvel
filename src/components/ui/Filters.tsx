import React, { useState } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";

export const Filters: React.FC = () => {
  function handleChange(
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) {
    setType(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value
    }));
  }

  const [type, setType] = useState([]);
  return (
    <FormControl>
      <InputLabel htmlFor="dropdown-type">Age</InputLabel>
      <Select
        multiple
        value={type}
        onChange={handleChange}
        inputProps={{
          name: "age",
          id: "dropdown-type"
        }}
      >
        <MenuItem value="" />
        <MenuItem value="Comics">Comics</MenuItem>
        <MenuItem value="Events">Events</MenuItem>
        <MenuItem value="Series">Series</MenuItem>
        <MenuItem value="Stories">Stories</MenuItem>
      </Select>
    </FormControl>
  );
};
