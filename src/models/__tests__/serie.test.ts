import { Serie } from "../Serie";

it("instancia um novo serie", () => {
  let id = 1;
  let title = "NOME";
  let description = "Descrição";
  let serie = new Serie(id, title, description);

  expect(serie.id).toBe(id);
  expect(serie.title).toBe(title);
  expect(serie.description).toBe(description);
});
