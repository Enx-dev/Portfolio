import React from "react";
import Skillcomp from "../Components/Skills/Skillcomp";
import { skills } from "../Components/Skills/skill";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
type Props = {};

const varient = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Skills = (props: Props) => {
  return (
    <Box
      component={motion.div}
      variants={varient}
      animate="animate"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(300px,max-content))",
        justifyContent: "center",
        gap: "2.8rem",
        width: "100%",
      }}>
      {skills.map((skill) => (
        <Skillcomp heading={skill.head} key={skill.id} skills={skill.skills} />
      ))}
    </Box>
  );
};

export default Skills;
