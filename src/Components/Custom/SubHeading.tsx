import React from "react";
import { Typography } from "@mui/material";
import { TextStyles } from "./Styles";
import type { IHeadings } from "../../Interface";
const SubHeading = ({ name, id }: IHeadings) => {
  const { classes } = TextStyles();
  return (
    <Typography id={id} variant="h2" className={classes.subHeadings}>
      {name}
    </Typography>
  );
};

export default SubHeading;
