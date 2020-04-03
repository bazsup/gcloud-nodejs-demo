const request = require("supertest");

const app = require("./index");

describe("GET /", () => {
  it('should response text "Hello, Infra. I want to go outside."', async () => {
    const response = await request(app).get("/");
    expect(response.text).toEqual("Hello, Infra. I want to go outside");
    expect(response.statusCode).toBe(200);
  });
});
