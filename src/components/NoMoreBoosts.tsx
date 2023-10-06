"use client";
import { motion as m } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import Button from "./Button";

const NoMoreBoosts: React.FC = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-28">
      <m.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
        exit={{ opacity: 0, y: "15%" }}
        className="flex text-center p-4 mb2"
      >
        <TypewriterComponent
          options={{
            wrapperClassName:
              "text-white text-4xl md:text-5xl lg:text-6xl font-extrabold",
            cursorClassName: "text-white text-4xl lg:text-6xl font-bold",
            cursor: "",
            strings: "Thank You!",
            loop: true,
            delay: 95,
            deleteSpeed: Infinity,
            autoStart: true,
          }}
        ></TypewriterComponent>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.35 }}
        exit={{ opacity: 0, y: "15%" }}
      >
        <p className="text-gray-200 lg:text-lg mb-8 text-center pr-4 pl-4 ">
          Thank you from the bottom of my ❤️ for using CVBoost`s BETA. I hope
          you found it useful. Please make sure to leave feedback so I can make
          CVBoost perfect for you!
        </p>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.45 }}
        exit={{ opacity: 0, y: "15%" }}
        className="text-center"
      >
        <Button
          onClick={() => window.open(process.env.NEXT_PUBLIC_FEEDBACK_FORM)}
        >
          Give Feedback!
        </Button>
      </m.div>
    </div>
  );
};
export default NoMoreBoosts;
