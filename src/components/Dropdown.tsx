import React, { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";

interface DropdownProps {
  dropdownText: string;
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownText }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Type the ref with HTMLDivElement

  useEffect(() => {
    // Handler to call on outside click
    const handleClickOutside = (event: MouseEvent) => {
      // Make sure dropdownRef.current is a node and event.target is a node before calling contains
      if (
        dropdownRef.current &&
        event.target &&
        !(
          event.target instanceof Node &&
          dropdownRef.current.contains(event.target)
        )
      ) {
        setIsDropdownOpen(false); // Close the dropdown if click is outside
      }
    };

    // Bind the event listener if the dropdown is open
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div ref={dropdownRef}>
      <div
        className="text-white font-semibold text-md cursor-pointer flex flex-row justify-center items-center"
        id="dropdownInformationButton"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {dropdownText}
      </div>
      {isDropdownOpen && (
        <div
          id="dropdownInformation"
          className="z-60 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-800 dark:divide-gray-600 absolute right-6 top-12"
        >
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 font-semibold text-md  hover:bg-gray-600 text-neutral-50 hover:text-white"
              onClick={() => signOut()}
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
