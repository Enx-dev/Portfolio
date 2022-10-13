import React from "react";
import { client } from "../utils/SanityClient";

import { Box } from "@mui/material";
import Projectcomp from "../Components/Projects";
import { IProjects } from "../Interface";

const Projects = ({ projects }: IProjects) => {
  console.log(projects);

  return (
    <Box>
      {projects.map((project) => (
        <Projectcomp
          key={project._id}
          desktopimage={project.project_mobile_img}
          github_link={project.github_link}
          live_link={project.live_link}
          mobileimage={project.project_desktop_img}
          project_name={project.project_name}
          description={project.description}
        />
      ))}
    </Box>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const projects = await client.fetch(`*[_type=="Project"]{
    _id,github_link,live_link,project_name,project_desktop_img,project_mobile_img,description
  }`);
  return {
    props: {
      projects,
    },
  };
};
