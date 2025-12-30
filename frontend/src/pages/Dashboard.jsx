import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="w-64 h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard Content
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
