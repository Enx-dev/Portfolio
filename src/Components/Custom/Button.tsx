import React from "react";
import { Button, ButtonProps, styled, LinkBaseProps } from "@mui/material";
import { BtnStyles } from "./Styles";
import type { IBtn } from "../../Interface";

type TCustomButton = LinkBaseProps &
  ButtonProps & {
    href: string | undefined;
  };

const CustomButton = styled(Button)<TCustomButton>(({ theme }) => ({
  minWidth: "16rem",
  maxWidth: "32rem",
  fontSize: "1.6rem",
  paddingBlock: "1rem",
  paddingInline: "2.4rem",
  height: "5.2rem",
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

export const PrimaryBtn = ({ name, id, href }: IBtn) => {
  const { classes } = BtnStyles();
  return (
    <CustomButton
      href={href}
      id={id}
      variant="contained"
      className={classes.primarybtn}>
      {name}
    </CustomButton>
  );
};
export const SecondaryBtn = ({ name, id, href }: IBtn) => {
  const { classes } = BtnStyles();
  return (
    <CustomButton
      href={href}
      id={id}
      target="_blank"
      rel="noreferrer noopener"
      variant="outlined"
      className={classes.secondarybtn}>
      {name}
    </CustomButton>
  );
};
