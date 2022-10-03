import { IconProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IBtn {
  name: string;
  event?: Function;
}

interface ILinks {
  name: string;
  to: string;
  Icon?: React.ReactNode;
}

interface IIcons {
  icon: React.ReactNode;
  to: string;
}

interface IHeadings {
  name: string;
}

interface ISmallDrawer {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export type { IBtn, ILinks, IIcons, IHeadings, ISmallDrawer };
