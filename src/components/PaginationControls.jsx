import React from 'react';
import usePagination from '@mui/material/usePagination';

function PaginationControls({ count, page, onChange }) {
  const { items } = usePagination({ count, page });

  return (
    <nav>
      <ul className="pagination-list">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                className={`pagination-button ${selected ? 'pagination-button-selected' : ''}`}
                {...item}
                onClick={() => onChange(null, page)}
              >
                {page}
              </button>
            );
          } else if (type === 'previous') {
            children = (
              <button
                type="button"
                className="pagination-name"
                {...item}
                onClick={() => onChange(null, page)}
              >
                {'Previous'}
              </button>
            );
          } else if (type === 'next') {
            children = (
              <button
                type="button"
                className="pagination-name"
                {...item}
                onClick={() => onChange(null, page)}
              >
                {'Next'}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}

export default PaginationControls;