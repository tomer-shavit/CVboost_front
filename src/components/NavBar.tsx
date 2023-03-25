const NavBar: React.FC = (props) => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-transparent pt-4 pl-6 z-1">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-2xl tracking-tight">CVBoost</span>
      </div>
    </nav>
  );
};

export default NavBar;
