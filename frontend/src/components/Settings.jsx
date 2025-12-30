import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Settings = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Profile updated (UI only)");
    }, 800);
  };

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-1">Settings</h2>
      <p className="text-md text-gray-600 mb-6">
        Configure your preferences
      </p>
      <div className="bg-white border border-gray-300 rounded-xl p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Profile Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
          <button
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 transition cursor-pointer"
            onClick={() =>
              setFormData({
                fullName: user?.fullName || "",
                email: user?.email || "",
              })
            }
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className={`px-5 py-2 text-sm rounded-lg font-medium text-white transition cursor-pointer
              ${saving ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
