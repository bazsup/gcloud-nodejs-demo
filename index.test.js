const request = require("supertest");

const server = require("./index");

describe("GET /", () => {
  afterEach(async () => {
    await server.close();
  });

  it('should response text "Hello, Infra. I want to go outside."', async () => {
    const response = await request(server).get("/");
    expect(response.text).toEqual("Hello, Infra. I want to go outside");
    expect(response.statusCode).toBe(200);
  });
});
