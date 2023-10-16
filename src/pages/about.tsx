import { PageLayout } from "@/components/PageLayout";
import React from "react";
import { motion as m } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <div className=" w-2/3 pt-2 pb-8 leading-relaxed">
        <m.div
          initial={{ opacity: 0, y: "15%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0, y: "15%" }}
        >
          <h1 className="text-3xl mt-10 md:text-4xl font-bold text-white mb-4">
            About CVBoost
          </h1>

          <p className="text-md md:text-xl text-white mb-8 md:mb-12">
            Dive into CVBoost, the gateway to unlocking your
            <span className="text-green-400"> resume’s full potential.</span>
            <br /> Upload, and watch as we transform feedback into dynamic
            insights and strategies, propelling you closer to your career
            aspirations.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: "15%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          exit={{ opacity: 0, y: "15%" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Data, Secured
          </h2>

          <p className="text-md text-white md:text-xl mb-6">
            We prioritize the security and privacy of our users. All your data,
            including your resume and feedback, is
            <span className="text-green-400"> encrypted and secured. </span>
            Rest assured, only you have access to your account and its contents.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: "15%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          exit={{ opacity: 0, y: "15%" }}
        >
          <footer className="mt-12 text-white flex text-center justify-center md:mt-16">
            <p>© 2023 CVBoost. All rights reserved.</p>
          </footer>
        </m.div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
