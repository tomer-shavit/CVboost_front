import React from "react";
import NavBar from "./NavBar";

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 bg-opacity-75 flex flex-col">
      <NavBar></NavBar>
      <main
        role="main"
        className="flex-1 flex flex-col items-center justify-center"
      >
        {children}
      </main>
    </div>
  );
};
