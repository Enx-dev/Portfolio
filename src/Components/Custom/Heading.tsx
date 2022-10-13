import React from "react";
import { Typography } from "@mui/material";
import { TextStyles } from "./Styles";
import type { IHeadings } from "../../Interface";

const Heading = ({ name, id }: IHeadings) => {
  const { classes } = TextStyles();
  return (
    <Typography id={id} variant="h1" className={classes.Headings}>
      {name}
    </Typography>
  );
};

export default Heading;
