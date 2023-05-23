/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What technologies I use</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <motion.div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </motion.div>
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");