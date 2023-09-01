import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const NavBar: React.FC = (props) => {
  const { isLoaded, userId } = useAuth();
  var userGreeting = <div></div>;

  if (userId) {
    userGreeting = <UserButton afterSignOutUrl="/"></UserButton>;
  } else if (isLoaded && !userId) {
    userGreeting = (
      <div>
        <Link href="/signin">
          <button className="text-white hover:text-green-300 font-semibold py-2 px-4">
            Log in
          </button>
        </Link>
        <Link href="/signup">
          <button className="text-white hover:text-green-300 font-semibold py-2 ">
            Sign up
          </button>
        </Link>
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
