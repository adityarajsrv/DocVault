import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Documents from "../components/Documents";
import Starred from "../components/Starred";
import Recent from "../components/Recent";
import Trash from "../components/Trash";
import Settings from "../components/Settings";
import Storage from "../components/Storage";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("documents");

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="w-64 h-full">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {activeSection === "documents" && <Documents />}
          {activeSection === "starred" && <Starred />}
          {activeSection === "recent" && <Recent />}
          {activeSection === "trash" && <Trash />}
          {activeSection === "storage" && <Storage />}
          {activeSection === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
