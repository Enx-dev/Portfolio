import React from "react";
import ImageWrapper from "./Images/ImageWrapper";
import Text from "../Custom/Text";
import Heading from "../Custom/Heading";
import { SecondaryBtn } from "../Custom/Button";
import SubHeading from "../Custom/SubHeading";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { IProject } from "../../Interface";

const Projectcomp = ({
  desktopimage,
  github_link,
  live_link,
  mobileimage,
  project_name,
  description,
}: IProject) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "backIn" },
      }}
      sx={{ marginBlockEnd: "3.6rem" }}>
      <Heading name={project_name} id="" />
      <ImageWrapper mobileimage={mobileimage} desktopimage={desktopimage} />
      <Text id="" name={description} />
      <Box
        sx={(theme) => ({
          display: "flex",
          // flexWrap: "wrap",
          flexDirection: "column",
          gap: "2rem",
          marginBlockStart: "1.6rem",
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
          },
        })}>
        <SecondaryBtn name="View live" href={live_link} />
        <SecondaryBtn name="View Repo" href={github_link} />
      </Box>
    </Box>
  );
};

export default Projectcomp;
