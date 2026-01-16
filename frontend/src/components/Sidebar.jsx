/* eslint-disable react/prop-types */
import logo from "/logo.png";
import { HiOutlineUpload } from "react-icons/hi";
import { CgFileDocument } from "react-icons/cg";
import { FaRegFolderOpen, FaRegStar } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = ({ activeSection, setActiveSection, onUpload }) => {
  const usedStorage = 2.6;
  const totalStorage = 10;
  const usagePercent = (usedStorage / totalStorage) * 100;

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-300">
      <div className="flex items-center gap-3 h-16 px-6 border-b border-gray-300">
        <img
          src={logo}
          alt="DocVault"
          className="w-11 h-11 p-1 bg-blue-500 rounded-lg"
        />
        <h1 className="text-2xl font-semibold text-gray-800">DocVault</h1>
      </div>
      <div className="flex flex-col flex-1 px-5 pt-6 space-y-3">
        <button
          onClick={onUpload}
          className="cursor-pointer flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <HiOutlineUpload className="w-6 h-6 " />
          <span className="text-base font-semibold">Upload</span>
        </button>
        <div className="space-y-1">
          <SidebarItem
            icon={<CgFileDocument />}
            label="My Documents"
            isActive={activeSection === "documents"}
            onClick={() => setActiveSection("documents")}
          />
          <SidebarItem
            icon={<FaRegStar />}
            label="Starred"
            isActive={activeSection === "starred"}
            onClick={() => setActiveSection("starred")}
          />
          <SidebarItem
            icon={<FaRegFolderOpen />}
            label="Recent"
            isActive={activeSection === "recent"}
            onClick={() => setActiveSection("recent")}
          />
        </div>
        <hr className="border-gray-200" />
        <div className="space-y-2">
          <SidebarItem
            icon={<FaRegTrashAlt />}
            label="Trash"
            isActive={activeSection === "trash"}
            onClick={() => setActiveSection("trash")}
          />
          <SidebarItem
            icon={<GrStorage />}
            label="Storage"
            isActive={activeSection === "storage"}
            onClick={() => setActiveSection("storage")}
          />
          <SidebarItem
            icon={<IoSettingsOutline />}
            label="Settings"
            isActive={activeSection === "settings"}
            onClick={() => setActiveSection("settings")}
          />
        </div>
      </div>
      <div className="px-5 py-4 border-t border-gray-300">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span className="font-medium">Storage Used</span>
          <span className="font-medium">
            {usedStorage} GB / {totalStorage} GB
          </span>
        </div>
        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${usagePercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer w-full flex items-center gap-4 px-4 py-3 rounded-lg transition
        ${
          isActive
            ? "bg-blue-100 text-blue-600"
            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        }`}
    >
      <span className="w-6 h-6 text-[22px]">{icon}</span>
      <span className="text-base font-medium">{label}</span>
    </button>
  );
};

export default Sidebar;
