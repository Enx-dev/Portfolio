import React from "react";
import { Container, ContainerProps, styled } from "@mui/material";
type Props = {
  children: React.ReactNode;
};

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  maxWidth: "100%",
  paddingInline: "1.6rem",
  [theme.breakpoints.up("md")]: {
    paddingInline: "2.4rem",
  },
  [theme.breakpoints.up("lg")]: {
    paddingInline: "4rem",
  },
}));

const Wrapper = ({ children }: Props) => {
  return <CustomContainer>{children}</CustomContainer>;
};

export default Wrapper;
