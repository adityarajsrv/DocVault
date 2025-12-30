import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
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
      <div className="flex items-center gap-3">
        <button className="cursor-pointer relative p-2 rounded-full hover:bg-gray-100 transition">
          <IoMdNotificationsOutline className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            J
          </div>
          <span className="text-gray-700 font-medium hidden sm:block">
            John Doe
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
