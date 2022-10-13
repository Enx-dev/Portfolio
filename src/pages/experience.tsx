import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";
import React from "react";
import {
  Shared,
  Additional,
  TimeItem,
} from "../Components/Expeience_Educarion/Shared";
import { client } from "../utils/SanityClient";

type Props = {
  experience: {
    EndDate: string;
    StartDate: string;
    _id: string;
    company: string;
    role: string;
  }[];
};

const Experience = ({ experience }: Props) => {
  return (
    <Shared ADD={<Additional text="Lets Add yours" />}>
      {experience.map((item) => (
        <TimeItem
          key={item._id}
          course={item.role}
          endDate={item.EndDate}
          startDate={item.StartDate}
          institution={item.company}
        />
      ))}
    </Shared>
  );
};

export default Experience;

export const getStaticProps = async () => {
  const experience =
    await client.fetch(`*[_type=="Experience"] | order(StartDate) {
    StartDate,EndDate,_id,company,role
  }`);
  return {
    props: {
      experience,
    },
  };
};

/**
 *
 */
