import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LargeDrawer, MidDrawer, SmallDrawer } from "./drawers";
import { SocialIcons } from "../Custom/Icons";
import { socialLinks } from "./links";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <AppBar
        sx={(theme) => ({
          paddingBlock: theme.spacing(2),
          paddingInline: theme.spacing(1),
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        })}
        position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {socialLinks.map((link) => (
              <React.Fragment key={link._id}>
                <SocialIcons id="Home-links" to={link.to} icon={link.comp} />
              </React.Fragment>
            ))}
          </Box>
          <IconButton onClick={() => setToggle(true)}>
            <MenuIcon
              sx={(theme) => ({
                width: "4.0rem",
                height: "4.0rem",
                color: theme.palette.background.default,
              })}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SmallDrawer setToggle={setToggle} toggle={toggle} />
      <LargeDrawer />
      <MidDrawer />
    </>
  );
};

export default Navbar;
