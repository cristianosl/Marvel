import { Comic } from "../Comic";

it("instancia um novo comic", () => {
  let id = 1;
  let title = "NOME";
  let description = "Descrição";
  let comic = new Comic(id, title, description);

  expect(comic.id).toBe(id);
  expect(comic.title).toBe(title);
  expect(comic.description).toBe(description);
});
