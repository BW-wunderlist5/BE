const request = require("supertest");

const server = require("../api/server.js");

describe("authentication register router", function() {
  it("should run tests", function() {
    expect(true).toBe(true);
  });
  describe("POST /api/register", function() {
    it("should return 500!", function() {
      return request(server)
        .post("/api/register")
        .send({
          username: "ana",
          password: "ringo"
        })
        .then(res => {
          expect(res.status).toBe(500);
        });
    });
    it("should return 200", function() {
      return request(server)
        .post("/api/login")
        .send({ username: "ana", password: "ringo" })
        .then(res => {
          expect(res.status).toBe(200);
          process.env.TOKEN = res.body.token;
        });
    });
  });
});
