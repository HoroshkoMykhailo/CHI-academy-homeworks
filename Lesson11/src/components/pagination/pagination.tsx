import React from 'react';
import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import Link from 'next/link';

interface PaginationProps {
  page: number;
  lastPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, lastPage }) => {
  const paginationItems = Array.from({ length: lastPage }, (_, index) => index + 1);
  return (
    <div>
      {paginationItems.map((item) => (
        <PaginationItem
          key={item}
          component={Link}
          href={`/?page=${item}`}
          page={item}
          selected={item === page}
          sx={{
            backgroundColor: '#BCE784',
            color: '#313638',
            '&:hover': {
              backgroundColor: '#A8D88C', 
            },
            '&.Mui-selected': {
              backgroundColor: '#FF9914',
              color: '#313638',
            },
          }}
        />
      ))}
    </div>
  );
};

export { Pagination };