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
        })}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Avatar sx={{ width: "4rem", height: "4rem" }} />

            <Typography
              sx={(theme) => ({
                fontSize: "2.4rem",
                color: theme.palette.background.default,
                fontWeight: "700",
                letterSpacing: "0.3rem",
              })}
              variant="body1">
              Enx
            </Typography>
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
