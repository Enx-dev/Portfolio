import React from "react";
import { Typography } from "@mui/material";
import { TextStyles } from "./Styles";
import type { IHeadings } from "../../Interface";

const Heading = ({ name }: IHeadings) => {
  const { classes } = TextStyles();
  return (
    <Typography variant="h1" className={classes.Headings}>
      {name}
    </Typography>
  );
};

export default Heading;
