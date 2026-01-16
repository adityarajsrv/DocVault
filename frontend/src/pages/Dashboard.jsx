import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Documents from "../components/Documents";
import Starred from "../components/Starred";
import Recent from "../components/Recent";
import Trash from "../components/Trash";
import Settings from "../components/Settings";
import Storage from "../components/Storage";
import UploadModal from "../modals/uploadModal";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("documents");
  const [showUpload, setShowUpload] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshDocuments = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="w-64 h-full">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onUpload={() => setShowUpload(true)}
        />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {activeSection === "documents" && (
            <Documents refreshKey={refreshKey} />
          )}
          {activeSection === "starred" && <Starred />}
          {activeSection === "recent" && <Recent />}
          {activeSection === "trash" && <Trash />}
          {activeSection === "storage" && <Storage />}
          {activeSection === "settings" && <Settings />}
        </div>
      </div>
      {showUpload && (
        <UploadModal
          onClose={() => setShowUpload(false)}
          onSuccess={refreshDocuments}
        />
      )}
    </div>
  );
};

export default Dashboard;
