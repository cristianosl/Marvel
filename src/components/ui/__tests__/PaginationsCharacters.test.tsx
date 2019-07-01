import React from "react";
import { shallow } from "enzyme";
import { PaginationCharacters } from "../PaginationCharacters";

const onClickPaginationHandler = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  offset: number
) => {
  console.log(offset);
};
it("Renderizar o <PaginationCharacters /> corretamente", () => {
  shallow(
    <PaginationCharacters
      limit={20}
      offset={0}
      total={200}
      onClick={onClickPaginationHandler}
    />
  );
});
