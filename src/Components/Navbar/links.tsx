import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import AboutIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CodeIcon from "@mui/icons-material/Code";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const navLinks = [
  {
    _id: 0,
    name: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    _id: 1,
    name: "Projects",
    icon: <CodeIcon />,
    to: "/projects",
  },
  {
    _id: 2,
    name: "About",
    icon: <AboutIcon />,
    to: "/about",
  },
  {
    _id: 3,
    name: "Education",
    icon: <BookIcon />,
    to: "/education",
  },
  {
    _id: 4,
    name: "Experience",
    icon: <AccountTreeIcon />,
    to: "/experience",
  },
];

const socialLinks = [
  {
    _id: 0,
    comp: <MarkEmailReadIcon />,
    to: "mailto:enx.co21@gmail.com",
  },
  {
    _id: 1,
    comp: <PhoneIcon />,
    to: "tel:+2349018127061",
  },
  {
    _id: 2,
    comp: <LinkedInIcon />,
    to: "https://www.linkedin.com/in/eniola-adejori-0a3091204/",
  },
  {
    _id: 3,
    comp: <GitHubIcon />,
    to: "https://github.com/Enx-dev",
  },
];

export { navLinks, socialLinks };
