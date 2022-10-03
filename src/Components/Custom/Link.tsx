import React from "react";
import { useRouter } from "next/router";
import { Button, ButtonProps, styled } from "@mui/material";
import { LinkProps } from "next/link";
import type { ILinks } from "../../Interface";

type TCustomLink = ButtonProps &
  LinkProps & {
    active: boolean;
  };

const CustomLink = styled(Button)<TCustomLink>(({ theme, active }) => ({
  fontSize: "2.4rem",
  color: active
    ? theme.palette.secondary.main
    : theme.palette.secondary.contrastText,
  fontWeight: "500",
  transition: "all 0.3s ease-in-out",
  fontFamily: "Open sans",
  backgroundColor: active ? theme.palette.background.default : "-moz-initial",
  paddingInline: "1.6rem",
  borderRadius: "5rem",
  position: "relative",
  "&:after": {
    content: "''",
    bottom: "0",
    borderRadius: "500px",
    width: "0",
    height: "10%",
    backgroundColor: theme.palette.secondary.main,
    position: "absolute",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover": {
    backgroundColor: active ? theme.palette.background.default : "initial",
    "&:after": {
      width: !active && "100%",
    },
  },
  [theme.breakpoints.only("lg")]: {
    paddingInline: "5rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
    borderStartStartRadius: "5rem",
    borderEndStartRadius: "5rem",
    borderEndEndRadius: "0",
    borderStartEndRadius: "0",
    justifyContent: "flex-start",
    paddingInline: "2rem",
    "&:hover": {
      backgroundColor: active ? theme.palette.background.default : "initial",
      "&:after": {
        width: "0%",
      },
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "1.6rem",
    borderRadius: "5rem 0 0 5rem",
  },
  "& svg": {
    width: "3rem",
    height: "3rem",
  },
}));

const Links = ({ to, name, Icon }: ILinks) => {
  const { pathname } = useRouter();
  return (
    <CustomLink
      active={pathname === to}
      variant="text"
      startIcon={Icon}
      href={to}>
      {name}
    </CustomLink>
  );
};

export default Links;
