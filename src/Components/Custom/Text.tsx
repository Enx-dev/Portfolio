import React from "react";
import { Typography } from "@mui/material";
import { TextStyles } from "./Styles";
import type { IHeadings } from "../../Interface";

const Text = ({ name }: IHeadings) => {
  const { classes } = TextStyles();
  return (
    <Typography variant="body1" className={classes.Text}>
      {name}
    </Typography>
  );
};

export default Text;
