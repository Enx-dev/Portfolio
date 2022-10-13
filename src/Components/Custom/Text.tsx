import React from "react";
import { Typography } from "@mui/material";
import { TextStyles } from "./Styles";
import type { IHeadings } from "../../Interface";

const Text = ({ name, id }: IHeadings) => {
  const { classes } = TextStyles();
  return (
    <Typography id={id} variant="body1" className={classes.Text}>
      {name}
    </Typography>
  );
};

export default Text;
