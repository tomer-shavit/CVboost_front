import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const NavBar: React.FC = (props) => {
  const { data: session } = useSession();

  var userGreeting = <div></div>;

  if (session) {
    userGreeting = <div onClick={() => signOut()}>Hi {session.user?.name}</div>;
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
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <span className="font-semibold text-2xl tracking-tight">CVBoost</span>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="text-sm flex-grow"></div>
        {userGreeting}
      </div>
    </nav>
  );
};

export default NavBar;
