import { useState } from "react";
import "../../styles/pagination.scss";

const usePagination = (totalItems: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = (items: any[]) => {
    return items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    nextPage,
    prevPage,
    setCurrentPage,
  };
};

export default usePagination;
