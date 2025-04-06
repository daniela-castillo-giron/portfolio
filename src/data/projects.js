import {
  BiLogoReact,
  BiLogoJava,
} from "react-icons/bi";
import { TbDatabase } from "react-icons/tb";

const ProjectsData = [
  {
    id: "1",
    name: "OneStop Bank",
    image: "./onestop-bank.png",
    icons: [
      BiLogoReact,
      BiLogoJava,
      TbDatabase,
    ],
    description: "OneStop Bank is a secure and scalable online banking system that allows users to manage accounts, transfer funds, and view transaction history through a user-friendly interface.",
    github: {
      ui: "https://github.com/daniela-castillo-giron/banking-portal-ui/",
      backend: "https://github.com/daniela-castillo-giron/banking-portal-be/"
    },
    demo: "https://banking-portal-bf0c0.web.app/",
  },
];

export default ProjectsData;
