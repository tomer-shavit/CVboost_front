import Link from "next/link";

const NavBar: React.FC = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <span className="font-semibold text-2xl tracking-tight">CVBoost</span>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          {/* <Link href="/login">
            <button className="text-white hover:text-green-300 font-semibold py-2 px-4">
              Log in
            </button>
          </Link> */}
          <Link href="/signup">
            <button className="text-white hover:text-green-300 font-semibold py-2 px-4 ">
              Hi Tomer
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
