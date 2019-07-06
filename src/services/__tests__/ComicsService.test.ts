import { GenericService } from "../GenericService";
import { Comic } from "../../models";

describe("Testando consumo de serviços referente aos personagens", () => {

  it("Deve retornar uma lista de comics", async () => {
    expect.assertions(5);
    const service = new GenericService<Comic>("/comics");
    const dataWrapper = await service.getDataWrapper();
    expect(dataWrapper.status).toBe(200);
    expect(dataWrapper.data.data.offset).toBeDefined();
    expect(dataWrapper.data.data.limit).toBeGreaterThan(0);
    expect(dataWrapper.data.data.count).toBeDefined();
    expect(dataWrapper.data.data.total).toBeGreaterThan(0);
  });

  it("Verifica um dos \"comics\" que foram retornados", async () => {
    expect.assertions(1);
    const service = new GenericService<Comic>("/comics");
    const models = await service.getModels();
    expect(models[0].id).toBeGreaterThan(0);
  });

});
