"use client";
import { useSession, signIn } from "next-auth/react";
import { motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import Button from "./Button";
import Input from "./Input";
import DropzoneWrapper from "./UploadWrapper";

const PreUpload: React.FC<{ setFile: (file: File) => void }> = ({
  setFile,
}) => {
  const { data: session, status } = useSession();
  const [title, setTitle] = useState(<div></div>);
  const [subtitle, setSubtitle] = useState(<div></div>);
  const [cta, setCta] = useState(<div></div>);
  const [body, setBody] = useState(<div></div>);

  // Set title
  useEffect(() => {
    if (
      !session ||
      (session && session.user && session.user.resumeBoostsAvailable > 0)
    ) {
      setTitle(
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
              strings: "Boost your resume with AI.",
              loop: true,
              delay: 95,
              deleteSpeed: Infinity,
              autoStart: true,
            }}
          ></TypewriterComponent>
        </m.div>
      );
    } else if (
      session &&
      session.user &&
      session.user.resumeBoostsAvailable <= 0
    ) {
      setTitle(
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
      );
    }
  }, [session]);

  // set subtitle
  useEffect(() => {
    if (
      !session ||
      (session && session.user && session.user.resumeBoostsAvailable > 0)
    ) {
      setSubtitle(
        <m.div
          initial={{ opacity: 0, y: "15%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.35 }}
          exit={{ opacity: 0, y: "15%" }}
        >
          <p className="text-gray-200 lg:text-lg mb-8 md:mb-10 md:mt-4 text-center pr-4 pl-4 ">
            Want to land your dream job faster? Upload your resume and let our
            AI analyze it and give you custom feedback.
          </p>
        </m.div>
      );
    } else {
      setSubtitle(
        <m.div
          initial={{ opacity: 0, y: "15%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.35 }}
          exit={{ opacity: 0, y: "15%" }}
        >
          <p className="text-gray-200 lg:text-lg mb-8 text-center pr-4 pl-4 ">
            Thank you from the bottom of my ❤️ for using CVBoost`s BETA.
            <br />I hope you found it useful. Please make sure to leave feedback
            so I can make CVBoost perfect for you!
          </p>
        </m.div>
      );
    }
  }, [session]);

  // set cta
  useEffect(() => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const uploadedFile = event.target.files?.[0];
      if (uploadedFile) {
        setFile(uploadedFile);
      }
    };
    if (!session) {
      setCta(
        <m.div
          initial={{ opacity: 0, y: "15%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.45 }}
          exit={{ opacity: 0, y: "15%" }}
          className="text-center"
        >
          <Button onClick={() => signIn()}>Lets Start!</Button>;
        </m.div>
      );
    } else if (
      session &&
      session.user &&
      session.user.resumeBoostsAvailable > 0
    ) {
      setCta(
        <m.div
          initial={{ opacity: 0, y: "15%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.45 }}
          exit={{ opacity: 0, y: "15%" }}
          className="text-center md:mt-2"
        >
          <Input
            type="file"
            text="Upload Resume"
            onChange={handleFileChange}
          ></Input>
          <p className="mt-6 md:mt-8 text-neutral-400">
            You have
            <span className="text-green-500">
              {session.user
                ? " " + session.user.resumeBoostsAvailable + " "
                : " 0 "}
            </span>
            Uploads left
          </p>
          <p className="mt-2 text-neutral-500">PDF format, English Only.</p>
        </m.div>
      );
    } else if (
      session &&
      session.user &&
      session.user.resumeBoostsAvailable <= 0
    ) {
      setCta(
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
      );
    }
  }, [session, setFile]);
  useEffect(() => {
    if (session && session.user && session.user.resumeBoostsAvailable > 0) {
      console.log(session);
      setBody(
        <DropzoneWrapper setFile={setFile}>
          <div className="flex flex-col items-center justify-center mb-28">
            {title} {subtitle} {cta}
          </div>
        </DropzoneWrapper>
      );
    } else {
      console.log("no session");
      setBody(
        <div className="flex flex-col items-center justify-center mb-28">
          {title} {subtitle} {cta}
        </div>
      );
    }
  }, [title, subtitle, cta, session, setFile]);

  return <div> {body} </div>;
};
export default PreUpload;
