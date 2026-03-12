import { motion } from "framer-motion";

function SkillCard({name, logo}){
    return(
        <div className="skill-card flex flex-col justify-center items-center">
            <div className="logo text-[5rem]">{logo}</div>
            <div className="name text-[1.2rem]">{name}</div>
        </div>
    );
}
export default SkillCard;