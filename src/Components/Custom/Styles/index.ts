import { alpha } from "@mui/material";
import { makeStyles } from "tss-react/mui";
export const BtnStyles = makeStyles()((theme) => ({
  primarybtn: {
    color: theme.palette.background.default,
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.7),
    },
  },
  secondarybtn: {
    borderWidth: "0.2rem",
    "&:hover": {
      borderColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.up("md")]: {
      borderWidth: "0.4rem",
    },
  },
}));
export const TextStyles = makeStyles()((theme) => ({
  Headings: {
    fontSize: "3.2rem",
    fontWeight: "700",
    lineHeight: "4rem",
    fontFamily: "Open sans",
    letterSpacing: "0.1rem",
    color: theme.palette.secondary.main,
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",

    [theme.breakpoints.up("md")]: {
      fontSize: "4rem",
      maxWidth: "25ch",
      lineHeight: "6rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "6rem",
      lineHeight: "7.6rem",
    },
  },
  subHeadings: {
    fontSize: "3.2rem",
    fontWeight: "400",
    lineHeight: "6rem",
    letterSpacing: "0.1rem",
    fontFamily: "Open sans",
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",

    color: theme.palette.secondary.dark,
    [theme.breakpoints.up("md")]: {
      fontSize: "4rem",
      maxWidth: "30ch",
      lineHeight: "6.4rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "5.2rem",
      lineHeight: "7.2rem",
    },
  },
  Text: {
    fontSize: "1.6rem",
    fontWeight: "300",
    lineHeight: "2.8rem",
    letterSpacing: "0.1rem",
    fontFamily: "Poppins",
    color: theme.palette.text.primary,
  },
}));
