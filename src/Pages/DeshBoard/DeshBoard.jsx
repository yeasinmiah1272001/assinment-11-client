import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const DeshBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <main className="w-11/12 mx-auto">
        <div className="grid py-5 grid-cols-12 min-h-screen">
          <div className="bg-amber-200 col-span-3 w-full flex flex-col items-center">
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center w-full py-2 my-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Services
              </button>
              {isOpen && (
                <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <NavLink
                      to="/desh"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/desh/add"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Add Services
                    </NavLink>
                    <NavLink
                      to="/desh/my"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      My Services
                    </NavLink>
                    <NavLink
                      to="/desh/sc"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      My Schedules
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-green-200 col-span-9 h-full">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeshBoard;
