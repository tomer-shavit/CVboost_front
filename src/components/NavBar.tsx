import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Dropdown from "./Dropdown";

const NavBar: React.FC = (props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  var userGreeting = <div></div>;

  if (status === "loading") {
    userGreeting = <div></div>;
  } else if (session && session.user) {
    userGreeting = (
      <Dropdown dropdownText={`Hi ${session.user.name}`}></Dropdown>
    );
  } else {
    userGreeting = (
      <div>
        <button
          onClick={() => signIn()}
          className="text-white hover:text-green-300 font-semibold py-2 "
        >
          Sign up
        </button>
      </div>
    );
  }

  const handleLogoClick = () => {
    if (router.pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  const aboutLinkColor =
    router.pathname === "/about" ? "text-green-400" : "text-white";

  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-4 pl-6 pr-6">
      <div
        className="flex items-center cursor-pointer flex-shrink-0 text-white mr-6"
        onClick={handleLogoClick}
      >
        <span className="font-semibold text-2xl tracking-tight">CVBoost</span>
      </div>
      <div className="flex items-center">
        <Link href="/about">
          <span
            className={`${aboutLinkColor} hover:text-green-300 font-semibold py-2 mr-4 cursor-pointer`}
          >
            About
          </span>
        </Link>
        {userGreeting}
      </div>
    </nav>
  );
};

export default NavBar;
