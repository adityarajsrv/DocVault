/* eslint-disable react/prop-types */
import {
  IoDocumentTextOutline,
  IoImageOutline,
} from "react-icons/io5";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { MdOutlineSlideshow } from "react-icons/md";
import { FiFolder } from "react-icons/fi";

const fileTypes = [
  { label: "pdf", text: "PDF", icon: <IoDocumentTextOutline /> },
  { label: "doc", text: "Document", icon: <IoDocumentTextOutline /> },
  { label: "xls", text: "Spreadsheet", icon: <BsFileEarmarkSpreadsheet /> },
  { label: "img", text: "Image", icon: <IoImageOutline /> },
  { label: "ppt", text: "Presentation", icon: <MdOutlineSlideshow /> },
  { label: "folder", text: "Folder", icon: <FiFolder /> },
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
  "Product",
  "Project",
  "Q4",
  "Requirements",
  "Sales",
  "Strategy",
  "Team",
];

const FilterDropdown = ({
  selectedTypes,
  setSelectedTypes,
  selectedTags,
  setSelectedTags,
  onClear,
}) => {
  const hasActiveFilters =
    selectedTypes.length > 0 || selectedTags.length > 0;

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-semibold text-gray-700">
          Filters
        </h4>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="text-sm text-blue-600 hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>
      <div className="mb-6">
        <h5 className="text-sm font-semibold text-gray-700 mb-3">
          File Type
        </h5>
        <div className="flex flex-wrap gap-2">
          {fileTypes.map((type) => {
            const active = selectedTypes.includes(type.label);
            return (
              <button
                key={type.label}
                onClick={() => toggleType(type.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition
                  ${
                    active
                      ? "bg-blue-50 border-blue-400 text-blue-600"
                      : "border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {type.icon}
                {type.text}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <h5 className="text-sm font-semibold text-gray-700 mb-3">
          Tags
        </h5>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition
                  ${
                    active
                      ? "bg-blue-50 text-blue-600"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
