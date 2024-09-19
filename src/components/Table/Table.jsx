import { useState } from "react";
import { FaPhone, FaEnvelope, FaEllipsisV } from "react-icons/fa";
import { TableColumns, TableData } from "./TabbleData";


const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const itemsPerPage = 5;

  const filteredData = TableData.filter((item) =>
    TableColumns.some((column) =>
      item[column].toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleActionClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 mb-4 w-full rounded-md"
      />
      <table className="w-full border-separate border-spacing-0 rounded-lg overflow-hidden">
        <thead>
          <tr>
            {TableColumns.map((column) => (
              <th key={column} className="border-b border-gray-300 p-2 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {TableColumns.map((column) => (
                <td key={column} className="border-b border-gray-300 p-2">
                  {column === "Contact" ? (
                    <div className="flex items-center space-x-2">
                      <a
                        href={`tel:${item[column]}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaPhone />
                      </a>
                      <a
                        href={`mailto:${item[column]}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  ) : column === "Action" ? (
                    <div className="relative">
                      <FaEllipsisV
                        className="text-gray-600 cursor-pointer"
                        onClick={() => handleActionClick(item)}
                      />
                      {showPopup && selectedItem === item && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 shadow-lg rounded-md">
                          <button
                            onClick={handleClosePopup}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-md"
                          >
                            Edit
                          </button>
                          <button
                            onClick={handleClosePopup}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            View
                          </button>
                          <button
                            onClick={handleClosePopup}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-md"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    item[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Previous
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
