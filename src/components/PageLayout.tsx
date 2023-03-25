import React from "react";
import NavBar from "./NavBar";

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-75">
      <NavBar></NavBar>
      <main
        role="main"
        className="w-full flex flex-col h-screen content-center justify-center"
      >
        {children}
      </main>
    </div>
  );
};
