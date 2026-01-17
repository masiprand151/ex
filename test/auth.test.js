const request = require("supertest");
const app = require("../app");

describe("Auth API", () => {
  it("login success", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "admin", password: "admin" });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
