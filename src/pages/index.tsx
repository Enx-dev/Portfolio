import type { NextPage } from "next";
import { Box } from "@mui/material";
import Heading from "../Components/Custom/Heading";
import SubHeading from "../Components/Custom/SubHeading";
import Text from "../Components/Custom/Text";
import { PrimaryBtn, SecondaryBtn } from "../Components/Custom/Button";
import React, { useEffect } from "react";
import Icons from "../Components/Custom/Icons";
import { socialLinks } from "../Components/Navbar/links";
import gsap from "gsap-trial";
import Flip from "gsap-trial/dist/Flip";
import SplitType from "split-type";
gsap.registerPlugin(Flip);

const Home: NextPage = () => {
  useEffect(() => {
    const newText = new SplitType("#home-subhead");
    const Text = new SplitType("#home-head");
    gsap
      .timeline({ defaults: { duration: 0.5, ease: "power1.in" } })
      .fromTo(
        "#home-subhead .word",
        {
          yPercent: -100,
        },
        {
          yPercent: 0,
          duration: 0.5,
          // ease: "lie",
          stagger: { amount: 0.5 },
        }
      )
      .fromTo(
        "#home-head .word",
        { yPercent: -200 },
        {
          yPercent: 0,
          duration: 0.4,
          // ease: "lie",
          stagger: { amount: 0.5, from: "random" },
        },
        "<50%"
      )
      .fromTo("#home-btn", { opacity: 0 }, { opacity: 1, stagger: 0.3 }, "<30%")
      .fromTo(
        "#Home-links",
        { opacity: 0 },
        { opacity: 1, stagger: { amount: 0.3 } }
      );
  }, []);

  return (
    <Box>
      <Text name="Hey there, I'm" id="home-text" />
      <SubHeading name="Adejori Eniola" id="home-subhead" />
      <Heading id="home-head" name="Frontend Developer and Tech Enthusiastic" />
      <Box
        sx={(theme) => ({
          display: "flex",
          // flexWrap: "wrap",
          flexDirection: "column",
          gap: "2rem",
          marginBlockStart: "4rem",
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
          },
        })}>
        <PrimaryBtn href="/skills" id="home-btn" name="View Skills" />
        <SecondaryBtn
          href="https://universityoflagos-my.sharepoint.com/:w:/g/personal/210905014_live_unilag_edu_ng/Eahv9TfpsXRHh9SjXvRWEqUB6ZdZe8D2pQ1VHebFGFmX_g"
          id="home-btn"
          name="View Resume"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2.4rem",
          marginTop: "3.6rem",
        }}>
        {socialLinks.map((link) => (
          <React.Fragment key={link._id}>
            <Icons id="Home-links" to={link.to} icon={link.comp} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
