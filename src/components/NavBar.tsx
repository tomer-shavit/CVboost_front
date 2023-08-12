import Link from "next/link";

const NavBar: React.FC = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-4 pl-6 pr-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <span
            className="font-semibold text-2xl tracking-tight"
            onClick={() => window.location.reload()}
          >
            CVBoost
          </span>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="text-sm flex-grow"></div>
        <div>
          {/* <Link href="/login">
            <button className="text-white hover:text-green-300 font-semibold py-2 px-4">
              Log in
            </button>
          </Link> */}
          {/* <Link href="/signup">
            <button className="text-white hover:text-green-300 font-semibold py-2 ">
              Hi Tomer
            </button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
