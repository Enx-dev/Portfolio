import { NextPage } from "next";
import React from "react";
import Wrapper from "../Custom/Wrapper";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </Box>
  );
};

export default Layout;
