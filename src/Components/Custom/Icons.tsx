import React from "react";
import { IconButton, Link } from "@mui/material";
import { IIcons } from "../../Interface";
// import { height } from "@mui/system";

const Icons = ({ icon, to, id }: IIcons) => {
  return (
    <Link href={to} id={id} target="_blank" rel="noreferrer noopener">
      <IconButton
        sx={(theme) => ({
          color: theme.palette.secondary.main,
          "& svg": {
            width: "3.2rem",
            height: "3.2rem",
          },
        })}>
        {icon}
      </IconButton>
    </Link>
  );
};
export const SocialIcons = ({ icon, to, id }: IIcons) => {
  return (
    <Link href={to} id={id} target="_blank" rel="noreferrer noopener">
      <IconButton
        sx={(theme) => ({
          color: theme.palette.background.default,
          "& svg": {
            width: "3.2rem",
            height: "3.2rem",
          },
          [theme.breakpoints.down("md")]: {
            "& svg": {
              width: "2.4rem",
              height: "2.4rem",
            },
          },
        })}>
        {icon}
      </IconButton>
    </Link>
  );
};

export default Icons;
