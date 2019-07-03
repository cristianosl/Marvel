import React from "react";
import Pagination from "material-ui-flat-pagination";
import './PaginationCharacters.css';

interface IPaginationCharactersProps {
  limit: number;
  offset: number;
  total: number;
  onClick(e: React.MouseEvent<HTMLElement, MouseEvent>, offset: number): void
}
export const PaginationCharacters: React.FC<
  IPaginationCharactersProps
> = props => {
  return <Pagination {...props} className="pagination" />;
};
