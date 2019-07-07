import { Story } from "../Story";

it("instancia um novo story", () => {
  let id = 1;
  let title = "NOME";
  let description = "Descrição";
  let story = new Story(id, title, description);

  expect(story.id).toBe(id);
  expect(story.title).toBe(title);
  expect(story.description).toBe(description);
});
