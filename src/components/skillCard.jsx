import { motion } from "framer-motion";

function SkillCard({ name, logo }) {
  return (
      <motion.div
        className="skill-card flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="logo text-[5vw]">{logo}</div>
        <div className="name text-[2vw]">{name}</div>
      </motion.div>
  );
}
export default SkillCard;
