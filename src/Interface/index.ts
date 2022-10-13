import { IconProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IBtn {
  name: string;
  id?: string;
  event?: Function;
  href: string;
}

interface ILinks {
  name: string;
  to: string;
  Icon?: React.ReactNode;
}

interface IIcons {
  icon: React.ReactNode;
  to: string;
  id?: string;
}

interface IHeadings {
  name: string;
  id: string;
}

interface ISmallDrawer {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ISKills {
  heading: string;
  skills: string[];
}

interface IProjects {
  projects: {
    _id: string;
    github_link: string;
    live_link: string;
    project_desktop_img: { asset: { _ref: string }; caption: string };
    project_mobile_img: { asset: { _ref: string }; caption: string };
    project_name: string;
    description: string;
  }[];
}

interface IProject {
  desktopimage: { asset: { _ref: string }; caption: string };
  github_link: string;
  live_link: string;
  mobileimage: { asset: { _ref: string }; caption: string };
  project_name: string;
  description: string;
}

export type {
  IBtn,
  ILinks,
  IIcons,
  IHeadings,
  ISmallDrawer,
  ISKills,
  IProjects,
  IProject,
};
