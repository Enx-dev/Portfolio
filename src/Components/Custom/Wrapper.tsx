import React from "react";
import { Container, ContainerProps, styled } from "@mui/material";
type Props = {
  children: React.ReactNode;
};

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  maxWidth: "100%",
  minHeight: "100vh",
  paddingInline: "1.6rem",
  paddingBlock: "5.6rem",
  justifyContent: "center",
  display: "flex",
  [theme.breakpoints.up("md")]: {
    paddingInlineStart: "22.4rem",
    paddingBlock: "1.6rem",
    alignItems: "center",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInlineStart: "32rem",
    paddingBlock: "1.6rem",
    alignItems: "center",
  },
}));

const Wrapper = ({ children }: Props) => {
  return <CustomContainer>{children}</CustomContainer>;
};

export default Wrapper;
