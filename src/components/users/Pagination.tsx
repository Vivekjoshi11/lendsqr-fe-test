import "../../styles/pagination.scss";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  setItemsPerPage
}: PaginationProps) => {
  console.log("setItemsPerPage in Parent:", setItemsPerPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      {/* Left Section */}
      <div className="pagination-info">
        <span>Showing</span>

        <select 
  value={itemsPerPage} 
  onChange={(e) => setItemsPerPage(Number(e.target.value))} 
  className="pagination-dropdown"
>
  {[10, 20, 50, 100].map((num) => (
    <option key={num} value={num}>
      {num}
    </option>
  ))}
</select>
        <span>out of {totalItems}</span>
      </div>

      {/* Right Section */}
      <div className="pagination-controls">
        <button 
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
          className="arrow-button"
        >
          {"<"}
        </button>

        {generatePageNumbers().map((number, index) => (
          <button
            key={index}
            className={`page-button ${number === currentPage ? "active" : ""}`}
            onClick={() => typeof number === "number" && setCurrentPage(number)}
            disabled={number === "..."}
          >
            {number}
          </button>
        ))}

        <button 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="arrow-button"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
