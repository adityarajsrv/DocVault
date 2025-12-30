import {
  IoDocumentTextOutline,
  IoImageOutline,
} from "react-icons/io5";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdOutlineSlideshow } from "react-icons/md";
import { FiFolder } from "react-icons/fi";

const fileTypes = [
  { label: "PDF", icon: <IoDocumentTextOutline /> },
  { label: "Document", icon: <IoDocumentTextOutline /> },
  { label: "Spreadsheet", icon: <BsFileEarmarkSpreadsheet /> },
  { label: "Image", icon: <IoImageOutline /> },
  { label: "Presentation", icon: <MdOutlineSlideshow /> },
  { label: "Folder", icon: <FiFolder /> },
  { label: "Other", icon: <IoDocumentTextOutline /> },
];

const tags = [
  "Brand",
  "Budget",
  "Dashboard",
  "Design",
  "Finance",
  "Launch",
  "Marketing",
  "Photo",
  "Presentation",
  "Product",
  "Project",
  "Q4",
  "Report",
  "Requirements",
  "Sales",
  "Strategy",
  "Team",
  "Template",
];

const FilterDropdown = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          File Type
        </h4>
        <div className="flex flex-wrap gap-2">
          {fileTypes.map((type) => (
            <button
              key={type.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              <span className="text-gray-600">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="px-4 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
