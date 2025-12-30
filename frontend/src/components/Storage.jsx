import { IoDocumentTextOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

/* eslint-disable react/prop-types */
const Storage = () => {
  const totalStorage = 10;
  const usage = {
    documents: 3.2,
    images: 1.8,
    spreadsheets: 0.9,
  };

  const usedStorage = usage.documents + usage.images + usage.spreadsheets;
  const usagePercent = (usedStorage / totalStorage) * 100;

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-1">Storage</h2>
      <p className="text-sm text-gray-500 mb-6">
        View and manage how your storage is being used
      </p>
      <div className="bg-white border border-gray-300 rounded-2xl p-6 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-md font-medium text-gray-700">
              Storage Usage
            </span>
            <span className="text-sm font-semibold text-gray-800">
              {usedStorage.toFixed(1)} GB / {totalStorage} GB
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            You are using {usagePercent.toFixed(0)}% of your available storage
          </p>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${usagePercent}%` }}
            />
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-md font-semibold text-gray-700 mb-3">
            Storage Breakdown
          </h3>
          <div className="space-y-3">
            <StorageRow
              label="Documents"
              value={usage.documents}
              logo={<IoDocumentTextOutline className="w-4 h-4 text-blue-600" />}
            />
            <StorageRow
              label="Images"
              value={usage.images}
              logo={<CiImageOn className="w-4 h-4 text-green-600" />}
            />
            <StorageRow
              label="Spreadsheets"
              value={usage.spreadsheets}
              logo={
                <BsFileEarmarkSpreadsheet className="w-4 h-4 text-yellow-500" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StorageRow = ({ label, value, logo }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center">
          {logo}
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <span className="text-sm text-gray-600">{value} GB</span>
    </div>
  );
};

export default Storage;
