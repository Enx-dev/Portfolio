import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../../utils/SanityClient";
import { Box } from "@mui/material";

type Props = {
  mobileimage: { asset: { _ref: string }; caption: string };
};

const MobileImg = ({ mobileimage }: Props) => {
  const imgProps = useNextSanityImage(client, mobileimage);
  return (
    <Box sx={{ width: "25rem" }}>
      <Image {...imgProps} alt="desktop" layout="responsive" />
    </Box>
  );
};

export default MobileImg;
