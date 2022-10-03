import React from "react";
import { Typography } from "@mui/material";
import { TextStyles } from "./Styles";
import type { IHeadings } from "../../Interface";
const SubHeading = ({ name }: IHeadings) => {
  const { classes } = TextStyles();
  return (
    <Typography variant="h2" className={classes.subHeadings}>
      {name}
    </Typography>
  );
};

export default SubHeading;
