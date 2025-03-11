import { BiLogoPostgresql } from "react-icons/bi";
import { DiDocker } from "react-icons/di";
import { FaAws, FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  // new icons
  SiMongodb,
  SiSpringboot,
  SiApachemaven,
  SiHibernate,
} from "react-icons/si";

export type stacksProps = Record<
  string,
  {
    Icon: IconType;
    className: string;
  }
>;

export const FRONTEND_STACKS: stacksProps = {
  JavaScript: { Icon: SiJavascript, className: "text-yellow-400" },
  "Next.js": { Icon: SiNextdotjs, className: "" },
  "React.js": { Icon: SiReact, className: "text-sky-500" },
  TailwindCSS: { Icon: SiTailwindcss, className: "text-cyan-300" },
};

export const BACKEND_STACKS = {
  "Node.js": { Icon: SiNodedotjs, className: "text-green-600" },
  Express: { Icon: SiExpress, className: "" },
  Java: { Icon: FaJava, className: "text-red-500" },
  "Springboot": { Icon: SiSpringboot, className: "text-green-500" }, // Spring framework uses the Java logo for representation
  Hibernate: { Icon: SiHibernate, className: "text-emerald-600" },
  JPA: { Icon: FaJava, className: "text-orange-600" },
  JUnit: { Icon: FaJava, className: "text-yellow-300" },
  Maven: { Icon: SiApachemaven, className: "text-blue-500" },
  Docker: { Icon: DiDocker, className: "text-purple-500" },
  AWS: { Icon: FaAws, className: "text-purple-500" },
  Prisma: { Icon: SiPrisma, className: "text-emerald-500" },
  postgreSql: { Icon: BiLogoPostgresql, className: "text-blue-500" },
  MongoDB: { Icon: SiMongodb, className: "text-green-400" },
};
