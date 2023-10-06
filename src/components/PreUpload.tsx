"use client";
import { motion as m } from "framer-motion";
import Input from "@/components/Input";
import TypewriterComponent from "typewriter-effect";
import Button from "./Button";
import { signIn, useSession } from "next-auth/react";
import { stat } from "fs";
import HasBoosts from "./HasBoosts";
import NoMoreBoosts from "./NoMoreBoosts";
import LoggedInView from "./LoggedInView";
import LoggedOutView from "./LoggedOutView";

const PreUpload: React.FC<{ setFile: (file: File) => void }> = ({
  setFile,
}) => {
  const { data: session, status } = useSession();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  let body = <div></div>;
  if (status !== "loading" && session) {
    body = <LoggedInView session={session} setFile={setFile}></LoggedInView>;
  } else {
    body = <LoggedOutView></LoggedOutView>;
  }
  return <div>{body}</div>;
};
export default PreUpload;
