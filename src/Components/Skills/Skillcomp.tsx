import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import SubHeading from "../Custom/SubHeading";
import Text from "../Custom/Text";
import { gsap } from "gsap-trial";
import { ISKills } from "../../Interface";
import { motion } from "framer-motion";

const Skillcomp = ({ heading, skills }: ISKills) => {
  useEffect(() => {
    // gsap.fromTo(
    //   "#Skills-Box",
    //   { scale: 0.2, opacity: 0 },
    //   { scale: 1, opacity: 1, stagger: 0.5, duration: 1, ease: "linear" }
    // );
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{
        scale: 0.7,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: "linear",
        },
      }}
      id="Skills-Box"
      sx={(theme) => ({
        minWidth: "20rem",
        padding: "2.4rem",
        borderRadius: "1.6rem",
        boxShadow: `0 0 1rem -6px   ${theme.palette.secondary.main}`,
        transition: "all 0.5s ease",
        cursor: "pointer",
        "&:hover": {},
      })}>
      <SubHeading name={heading} id={heading} />
      <Stack sx={{ paddingInlineStart: "2.8rem" }}>
        {skills.map((skill) => (
          <Text key={skill} name={skill} id={skill} />
        ))}
      </Stack>
    </Box>
  );
};

export default Skillcomp;
