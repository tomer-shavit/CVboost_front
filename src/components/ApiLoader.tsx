import styles from "../styles/loader.module.scss";
import { motion as m } from "framer-motion";
import FunnyComments from "./FunnyComments";

const resumeLines: string[] = [
  "Your resume is in good hands. Our team of highly trained hamsters is analyzing it as we speak.",
  "Hang in there, we're scanning your resume for typos and lies..",
  "Your resume is getting the VIP treatment. We've rolled out the red carpet and everything.",
  "We're taking your resume to new heights. We're talking Everest-level heights.",
  "Your resume is getting a first-class analysis. Sit back, relax, and enjoy the ride.",
  "Your resume is in safe hands. We've got our helmets and safety goggles on for this one.",
  "Your achievements are amazing! Well, some of them..",
  "We're almost done, just one more page to go. Or two. Or three. How long is this resume?",
];

const ApiLoader: React.FC = () => {
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
        <FunnyComments text={resumeLines}></FunnyComments>
      </div>
    </div>
  );
};

export default ApiLoader;
