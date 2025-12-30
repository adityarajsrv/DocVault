/* eslint-disable react/prop-types */
import {
  IoDocumentTextOutline,
  IoImageOutline,
} from "react-icons/io5";
import { FiRotateCcw, FiTrash2 } from "react-icons/fi";

const trashDocs = [
  {
    name: "Old Resume.doc",
    type: "doc",
    tags: ["Resume"],
    time: "Deleted 3 days ago",
  },
  {
    name: "Unused Design Assets",
    type: "img",
    tags: ["Design"],
    time: "Deleted 1 week ago",
  },
];

const iconMap = {
  doc: <IoDocumentTextOutline className="text-blue-600" />,
  img: <IoImageOutline className="text-purple-500" />,
};

const Trash = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-semibold mb-1">Trash</h2>
      <p className="text-sm text-gray-500 mb-6">
        Items will be permanently deleted after 30 days
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trashDocs.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 text-xl">
              {iconMap[doc.type]}
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              {doc.name}
            </h3>
            <div className="flex gap-2 mb-3">
              {doc.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-4">{doc.time}</p>
            <div className="flex justify-between">
              <ActionIcon
                icon={<FiRotateCcw />}
                className="text-green-600 cursor-pointer"
              />
              <ActionIcon
                icon={<FiTrash2 />}
                className="text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ActionIcon = ({ icon, className }) => (
  <button
    className={`p-2 rounded-md bg-gray-100 hover:bg-gray-200 ${className}`}
  >
    {icon}
  </button>
);

export default Trash;
