import React from "react";
import { IconButton, Link } from "@mui/material";
import { IIcons } from "../../Interface";
// import { height } from "@mui/system";

const Icons = ({ icon, to }: IIcons) => {
  return (
    <Link href={to} target="_blank" rel="noreferrer noopener">
      <IconButton
        sx={(theme) => ({
          color: theme.palette.background.default,
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

export default Icons;
