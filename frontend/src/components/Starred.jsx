/* eslint-disable react/prop-types */
import {
  IoDocumentTextOutline,
  IoImageOutline,
} from "react-icons/io5";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { FiEye, FiEdit2, FiShare2, FiDownload, FiStar } from "react-icons/fi";

const starredDocs = [
  {
    name: "Q4 Financial Report.pdf",
    type: "doc",
    tags: ["Finance", "Q4"],
    time: "about 1 year ago",
  },
  {
    name: "Budget Template.xlsx",
    type: "xls",
    tags: ["Budget"],
    time: "about 1 year ago",
  },
];

const iconMap = {
  doc: <IoDocumentTextOutline className="text-blue-600" />,
  xls: <BsFileEarmarkSpreadsheet className="text-green-600" />,
  img: <IoImageOutline className="text-purple-500" />,
};

const Starred = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-semibold mb-1">Starred</h2>
      <p className="text-sm text-gray-500 mb-6">
        Documents you marked as important
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {starredDocs.map((doc, idx) => (
          <div
            key={idx}
            className="relative bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
          >
            <FiStar className="absolute top-3 right-3 text-yellow-400" />
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
                  className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500">{doc.time}</p>
            <div className="mt-4 flex justify-between">
              <ActionIcon icon={<FiEye />} />
              <ActionIcon icon={<FiEdit2 />} />
              <ActionIcon icon={<FiShare2 />} />
              <ActionIcon icon={<FiDownload />} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ActionIcon = ({ icon }) => (
  <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer">
    {icon}
  </button>
);

export default Starred;
