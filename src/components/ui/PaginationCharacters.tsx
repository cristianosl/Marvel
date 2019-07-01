import React from "react";
import Pagination from "material-ui-flat-pagination";
import './PaginationCharacters.css';

interface PaginationCharactersProps {
  limit: number;
  offset: number;
  total: number;
  onClick(e: React.MouseEvent<HTMLElement, MouseEvent>, offset: number): void
}
export const PaginationCharacters: React.FC<
  PaginationCharactersProps
> = props => {
  return <Pagination {...props} className="pagination" />;
};
