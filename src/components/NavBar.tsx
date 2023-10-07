import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const NavBar: React.FC = (props) => {
  const { data: session, status } = useSession();

  var userGreeting = <div></div>;

  if (status === "loading") {
    userGreeting = <div></div>;
  } else if (session) {
    userGreeting = (
      <div
        className="text-white font-semibold text-md cursor-pointer"
        onClick={() => signOut()}
      >
        Hi {session.user?.name}
      </div>
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
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-4 pl-6 pr-6">
      <div
        className="flex items-center cursor-pointer flex-shrink-0 text-white mr-6"
        onClick={() => window.location.reload()}
      >
        <span className="font-semibold text-2xl tracking-tight">CVBoost</span>
      </div>
      <div className="flex items-center">
        <div className="text-sm flex-grow"></div>
        {userGreeting}
      </div>
    </nav>
  );
};

export default NavBar;
