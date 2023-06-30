import { ButtonHTMLAttributes } from 'react';

interface PaginationButtonsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  currentPage: number;
  length: number;
  totalPages: number;
  changePage: (pageNumber: number) => void;
}

export default function PaginationButtons({
  currentPage,
  length,
  totalPages,
  changePage,
  ...rest
}: PaginationButtonsProps) {
  const pageNumbers = Array.from({ length }, (_, index) => currentPage + index);

  return pageNumbers.map((pageNumber) => {
    {
      return (
        totalPages > pageNumber && (
          <li key={pageNumber}>
            <button
              className={`w-8 h-8 md:w-16 md:h-16 rounded-full
            ${currentPage === pageNumber ? 'bg-blue-950' : 'bg-blue-1 text-xl'}
               text-slate-100
            hover:bg-blue-0 hover:text-white duration-500 active:bg-blue-950`}
              onClick={() => {
                changePage(pageNumber);
              }}
              {...rest}
            >
              {pageNumber}
            </button>
          </li>
        )
      );
    }
  });
}
