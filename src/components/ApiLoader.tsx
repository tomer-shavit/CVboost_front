import styles from "../styles/loader.module.scss";
import { motion as m } from "framer-motion";
import FunnyComments from "./FunnyComments";
import { loadingSentences } from "@/assets/loadingLines";
import { useEffect, useState } from "react";

const ApiLoader: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    const randomLines = loadingSentences
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
    setLines(randomLines);
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center">
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
      <div className="flex justify-center text-center w-11/12 pt-20">
        <FunnyComments text={lines}></FunnyComments>
      </div>
    </div>
  );
};

export default ApiLoader;
