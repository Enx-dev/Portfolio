import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Text from "../Components/Custom/Text";
import SplitType from "split-type";
import gsap from "gsap-trial";
type Props = {};

const About = (props: Props) => {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          borderRadius: "1.6rem",
          padding: "3.6rem",
          boxShadow: `0 0 1rem -5px  ${theme.palette.secondary.main}`,
          [theme.breakpoints.down("sm")]: {
            boxShadow: `0 0 1rem -6px   ${theme.palette.secondary.main}`,
          },
        })}>
        <Text
          name="I am a self-taught developer from Lagos,
         Nigeria with 3 years of experience working with front-end technologies,
          applying my knowledge and skills to develop beautiful responsive websites.
           Working on small to medium projects, I am confident to tackle any development task that is assigned to me.
            I am a strong communicator, with excellent English language skills.
            I have a keen interest in technology and love to learn new things constantly.
            I have a keen eye for details, and I pay attention to every aspect of design.
             I can collaborate with team members on various projects, both technical and non-technical.
             I have great communication skills, and I can work on projects with a team of other developers.
              I am constantly learning new technologies, such as JavaScript frameworks and web design trends.
               And hmmm I love Gaming😊😊"
          id="about-text"
        />
      </Box>
    </Box>
  );
};

export default About;
