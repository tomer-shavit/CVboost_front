"use client";
import { useSession } from "next-auth/react";
import LoggedInView from "./LoggedInView";
import LoggedOutView from "./LoggedOutView";
import React, { useEffect, useState } from "react";

const PreUpload: React.FC<{ setFile: (file: File) => void }> = ({
  setFile,
}) => {
  const { data: session, status } = useSession();
  const [body, setBody] = useState(<div></div>);
  useEffect(() => {
    console.log("session", session);
    if (
      status !== "loading" &&
      session &&
      session.user &&
      session.user.resumeBoostsAvailable != -1
    ) {
      setBody(
        <LoggedInView session={session} setFile={setFile}></LoggedInView>
      );
    } else {
      setBody(<LoggedOutView></LoggedOutView>);
    }
  }, [session, status, setFile]);

  return <div>{body}</div>;
};
export default PreUpload;
