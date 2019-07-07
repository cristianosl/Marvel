import { Event } from "../Event";

it("instancia um novo event", () => {
  let id = 1;
  let title = "NOME";
  let description = "Descrição";
  let event = new Event(id, title, description);

  expect(event.id).toBe(id);
  expect(event.title).toBe(title);
  expect(event.description).toBe(description);
});
