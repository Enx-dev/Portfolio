import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { BtnStyles } from "./Styles";
import type { IBtn } from "../../Interface";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: "16rem",
  fontSize: "1.6rem",
  paddingBlock: "1rem",
  paddingInline: "2.4rem",
  height: "4rem",
  fontWeight: "400",
  borderRadius: "1rem",
  letterSpacing: "0.1rem",
  fontFamily: "Open sans",
  transition: "all 0.3s ease-in-out",
  [theme.breakpoints.up("md")]: {
    minWidth: "24.4rem",
    fontSize: "2.4rem",
    height: "8rem",
  },
}));

export const PrimaryBtn = ({ name }: IBtn) => {
  const { classes } = BtnStyles();
  return (
    <CustomButton variant="contained" className={classes.primarybtn}>
      {name}
    </CustomButton>
  );
};
export const SecondaryBtn = ({ name }: IBtn) => {
  const { classes } = BtnStyles();
  return (
    <CustomButton variant="outlined" className={classes.secondarybtn}>
      {name}
    </CustomButton>
  );
};
