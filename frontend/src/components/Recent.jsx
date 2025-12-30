/* eslint-disable react/prop-types */
import {
  IoDocumentTextOutline,
  IoImageOutline,
} from "react-icons/io5";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdOutlineSlideshow } from "react-icons/md";
import { FiEye, FiEdit2, FiShare2, FiDownload, FiClock } from "react-icons/fi";

const recentDocs = [
  {
    name: "Sales Dashboard.xlsx",
    type: "xls",
    tags: ["Sales"],
    time: "2 days ago",
  },
  {
    name: "Marketing Strategy 2025.doc",
    type: "doc",
    tags: ["Marketing"],
    time: "5 days ago",
  },
  {
    name: "Product Launch Presentation.pptx",
    type: "ppt",
    tags: ["Launch"],
    time: "1 week ago",
  },
];

const iconMap = {
  doc: <IoDocumentTextOutline className="text-blue-600" />,
  xls: <BsFileEarmarkSpreadsheet className="text-green-600" />,
  ppt: <MdOutlineSlideshow className="text-orange-500" />,
  img: <IoImageOutline className="text-purple-500" />,
};

const Recent = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-semibold mb-1">Recent</h2>
      <p className="text-sm text-gray-500 mb-6">
        Files you&apos;ve worked on recently
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentDocs.map((doc, idx) => (
          <div
            key={idx}
            className="group relative bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 text-xl">
              {iconMap[doc.type]}
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
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
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition">
              <div className="flex justify-between bg-white rounded-lg px-3 py-2 shadow-sm">
                <ActionIcon icon={<FiEye />} />
                <ActionIcon icon={<FiEdit2 />} />
                <ActionIcon icon={<FiShare2 />} />
                <ActionIcon icon={<FiDownload />} />
                <ActionIcon icon={<FiClock />} />
              </div>
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

export default Recent;
