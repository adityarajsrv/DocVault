import { useState, useRef, useEffect } from "react";
import { FiSearch, FiLogOut, FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const initials = user?.fullName
    ? user.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-16 bg-white border-b border-gray-300 flex items-center px-6 justify-between">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
          <FiSearch className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search documents or tags..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 relative" ref={dropdownRef}>
        <button className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
          <IoMdNotificationsOutline className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition"
        >
          <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {initials}
          </div>
          <span className="text-gray-700 font-medium hidden sm:block">
            {user?.fullName}
          </span>
        </button>
        {open && (
          <div
            className="absolute right-0 top-14 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50
                  animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-gray-800">
                {user?.fullName}
              </p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
            <div className="my-2 border-t border-gray-200" />
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition">
              <FiSettings className="w-4 h-4 text-gray-500" />
              Settings
            </button>
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
            >
              <FiLogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
