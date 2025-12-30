/* eslint-disable react/prop-types */
import {
  IoDocumentTextOutline,
  IoImageOutline,
} from "react-icons/io5";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdOutlineSlideshow } from "react-icons/md";
import { RiSoundModuleLine } from "react-icons/ri";
import {
  FiEye,
  FiEdit2,
  FiShare2,
  FiDownload,
  FiClock,
  FiStar,
} from "react-icons/fi";
import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import { LuFolder } from "react-icons/lu";
import { useMemo } from "react";

const documents = [
  {
    name: "Q4 Financial Report.pdf",
    type: "pdf",
    tags: ["Finance", "Q4", "+1"],
    time: "about 1 year ago",
  },
  {
    name: "Marketing Strategy 2025.doc",
    type: "doc",
    tags: ["Marketing", "Strategy"],
    time: "about 1 year ago",
  },
  {
    name: "Sales Dashboard.xlsx",
    type: "xls",
    tags: ["Sales", "Dashboard"],
    time: "about 1 year ago",
  },
  {
    name: "Product Launch Presentation.pptx",
    type: "ppt",
    tags: ["Product", "Launch", "+1"],
    time: "about 1 year ago",
  },
  {
    name: "Brand Assets",
    type: "folder",
    tags: ["Design", "Brand"],
    time: "about 1 year ago",
  },
  {
    name: "Team Photo.jpg",
    type: "img",
    tags: ["Team", "Photo"],
    time: "about 1 year ago",
  },
  {
    name: "Project Requirements.doc",
    type: "doc",
    tags: ["Project", "Requirements"],
    time: "about 1 year ago",
  },
  {
    name: "Budget Template.xlsx",
    type: "xls",
    tags: ["Finance", "Budget", "+1"],
    time: "about 1 year ago",
  },
];

const iconMap = {
  pdf: {
    icon: <IoDocumentTextOutline />,
    bg: "bg-red-50",
    color: "text-red-500",
  },
  doc: {
    icon: <IoDocumentTextOutline />,
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  xls: {
    icon: <BsFileEarmarkSpreadsheet />,
    bg: "bg-green-50",
    color: "text-green-600",
  },
  ppt: {
    icon: <MdOutlineSlideshow />,
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  img: {
    icon: <IoImageOutline />,
    bg: "bg-purple-50",
    color: "text-purple-500",
  },
  folder: {
    icon: <LuFolder />,
    bg: "bg-yellow-50",
    color: "text-yellow-500",
  },
};

const Documents = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const clearFilters = () => {
    setSelectedTypes([]);
    setSelectedTags([]);
  };

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const typeMatch =
        selectedTypes.length === 0 ||
        selectedTypes.includes(doc.type);

      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => doc.tags.includes(tag));

      return typeMatch && tagMatch;
    });
  }, [selectedTypes, selectedTags]);

  return (
    <div className="px-4">
      <h2 className="text-2xl font-semibold mb-1">My Documents</h2>
      <p className="text-sm text-gray-500 mb-6">
        Manage and organize your personal documents
      </p>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">
          {filteredDocuments.length} Documents
        </p>
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm hover:bg-gray-100 transition cursor-pointer"
        >
          <RiSoundModuleLine className="rotate-90" />
          Filters
        </button>
      </div>
      {showFilters && (
        <FilterDropdown
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          onClear={clearFilters}
        />
      )}
      {filteredDocuments.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          No documents match the selected filters
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDocuments.map((doc, idx) => {
            const icon = iconMap[doc.type];
            return (
              <div
                key={idx}
                className="group relative bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
              >
                <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition cursor-pointer">
                  <FiStar className="w-5 h-5 text-gray-400 hover:text-yellow-400" />
                </button>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${icon.bg}`}
                >
                  <span className={`text-xl ${icon.color}`}>
                    {icon.icon}
                  </span>
                </div>
                <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                  {doc.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
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
            );
          })}
        </div>
      )}
    </div>
  );
};

const ActionIcon = ({ icon }) => (
  <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer">
    {icon}
  </button>
);

export default Documents;