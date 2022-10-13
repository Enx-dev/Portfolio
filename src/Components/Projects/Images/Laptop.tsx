import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../../utils/SanityClient";
import { Box } from "@mui/material";
type Props = {
  desktopimage: { asset: { _ref: string }; caption: string };
};

const Laptop = ({ desktopimage }: Props) => {
  const imageprops = useNextSanityImage(client, desktopimage);
  return (
    <Box sx={{ width: "100%" }}>
      <Image {...imageprops} alt="desktop" layout="responsive" />
    </Box>
  );
};

export default Laptop;
