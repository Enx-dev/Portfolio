import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  ADD: React.ReactNode;
};

export const Shared = ({ ADD, children }: Props) => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ width: "100%" }}>
      <Timeline sx={{ width: "100%" }} position={match ? "alternate" : "right"}>
        {children}
        <TimelineItem
          sx={(theme) => ({
            marginBlockStart: "0.5rem",
            [theme.breakpoints.down("md")]: {
              "&:before": { flex: "0", padding: 0 },
            },
          })}>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          {ADD}
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

interface IItem {
  startDate: string;
  endDate: string;
  institution: string;
  course: string;
}

export const TimeItem = ({
  course,
  endDate,
  institution,
  startDate,
}: IItem) => {
  return (
    <TimelineItem sx={{ marginBlockStart: "0.5rem" }}>
      <TimelineOppositeContent
        sx={(theme) => ({
          width: "100%",
          [theme.breakpoints.down("md")]: { display: "none" },
        })}
        color="text.secondary">
        {/* <Text id="" name={`${item.StartDate} to ${item.EndDate}`} /> */}
        <Box>
          <Typography fontSize="2rem">
            {startDate} to {endDate}
          </Typography>
        </Box>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ marginBlockEnd: "1.6rem" }}>
        <Box>
          <Typography
            sx={(theme) => ({
              fontSize: "2.8rem",
              fontWeight: "bold",
              color: theme.palette.secondary.main,
              [theme.breakpoints.up("md")]: {
                fontSize: "3.6rem",
              },
            })}>
            {institution}
          </Typography>
          {/* <Typography>{item.EndDate}</Typography> */}
          <Typography
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: { display: "none" },
            })}>
            {startDate} to {endDate}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: "2rem",
              [theme.breakpoints.up("md")]: {
                fontSize: "2.4rem",
              },
            })}>
            {course}
          </Typography>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export const Additional = ({ text }: { text: string }) => {
  return (
    <TimelineContent
      sx={{
        marginBlockEnd: "1.6rem",
      }}>
      <Box>
        <Typography
          sx={(theme) => ({
            fontSize: "2.8rem",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
            [theme.breakpoints.up("md")]: {
              fontSize: "3.6rem",
            },
          })}>
          {text}
        </Typography>
        {/* <Typography>{item.EndDate}</Typography> */}
      </Box>
    </TimelineContent>
  );
};
