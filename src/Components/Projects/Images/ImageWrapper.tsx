import React from "react";
import MobileImg from "./MobileImg";
import LaptopImg from "./Laptop";
import { Box } from "@mui/material";
type Props = {
  desktopimage: { asset: { _ref: string }; caption: string };
  mobileimage: { asset: { _ref: string }; caption: string };
};

const ImageWrapper = ({ desktopimage, mobileimage }: Props) => {
  return (
    <Box sx={{ marginBlock: "2.4rem" }}>
      <LaptopImg desktopimage={desktopimage} />
    </Box>
  );
};

export default ImageWrapper;
