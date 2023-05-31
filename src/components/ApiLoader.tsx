import styles from "../styles/loader.module.scss";
import { motion as m } from "framer-motion";
import FunnyComments from "./FunnyComments";
import { loadingSentences } from "@/assets/loadingLines";
import { useEffect, useState } from "react";

const ApiLoader: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    // const randomLines = loadingSentences
    //   .sort(() => Math.random() - 0.5)
    //   .slice(0, 8);
    // setLines(randomLines);
    setLines([
      "Your resume is being reviewed by our team of ninja robots. They take their job very seriously.",
      "Hang in there, we're scanning your resume for typos and lies..",
      "We're taking your resume to new heights. We're talking Everest-level heights.",
      "Your resume is getting a first-class analysis. Sit back, relax, and enjoy the ride.",
      "Your resume is in good hands. We have the best analysts this side of the galaxy.",
      "Your resume is in safe hands. We've got our helmets and safety goggles on for this one.",
    ]);
  }, []);
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="relative ">
        <m.div
          initial={{ opacity: 0, y: "15%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 0, y: "15%" }}
          className={`${styles.loader_wrapper}`}
        >
          <div className={`${styles.box_wrap}`}>
            <div className={`${styles.box} ${styles.one}`}></div>
            <div className={`${styles.box} ${styles.two}`}></div>
            <div className={`${styles.box} ${styles.three}`}></div>
            <div className={`${styles.box} ${styles.four}`}></div>
            <div className={`${styles.box} ${styles.five}`}></div>
            <div className={`${styles.box} ${styles.six}`}></div>
          </div>
        </m.div>
      </div>
      <div className="flex justify-center pt-20">
        <FunnyComments text={lines}></FunnyComments>
      </div>
    </div>
  );
};

export default ApiLoader;
