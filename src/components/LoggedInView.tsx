"use client";
import { Session } from "next-auth";
import HasBoosts from "./HasBoosts";
import NoMoreBoosts from "./NoMoreBoosts";

const LoggedInView: React.FC<{
  session: Session;
  setFile: (file: File) => void;
}> = ({ setFile, session }) => {
  let body = <div></div>;
  if (session.user && session.user?.resumeBoostsAvailable > 0) {
    body = (
      <HasBoosts
        setFile={setFile}
        resumeBoostsAvailable={session.user.resumeBoostsAvailable}
      ></HasBoosts>
    );
  } else {
    body = <NoMoreBoosts></NoMoreBoosts>;
  }

  return <div>{body}</div>;
};

export default LoggedInView;
