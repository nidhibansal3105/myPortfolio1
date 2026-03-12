import {
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaJsSquare,
  FaJava,
  FaReact,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import SkillCard from "./skillCard";
const hunar = [
  {
    name: "HTML",
    logo: <FaHtml5 />,
  },
  {
    name: "CSS",
    logo: <FaCss3Alt />,
  },
  {
    name: "React",
    logo: <FaReact />,
  },
  {
    name: "Node Js",
    logo: <FaNode />,
  },
  {
    name: "My SQL",
    logo: <SiMysql />,
  },
  {
    name: "JavaScript",
    logo: <FaJsSquare />,
  },
  {
    name: "Java",
    logo: <FaJava />,
  },
  {
    name: "C/C++",
    logo: "C/C++",
  },
  {
    name: "Python",
    logo: <FaPython />,
  },
];
function Skills() {
  return (
    <>
      <div className="skill-head flex flex-col justify-center items-center">
        <span className="gradient-text">Skill Set</span>
        <div className="skill-set flex justify-center items-center gap-15">
          {hunar.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} logo={skill.logo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
