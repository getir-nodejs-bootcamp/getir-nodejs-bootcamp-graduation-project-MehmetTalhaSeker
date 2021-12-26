const request = require("supertest");
const app = require("../v1/src/app");
const { connection } = require("mongoose");

describe("POST /records", () => {
  describe("given startDate, endDate, minCount, maxCount", () => {
    // should respond with  json data according to given properties
    test("should respond with 200 status code and data", async () => {
      const response = await request(app).post("/records").send({
        startDate: "2014-01-01",
        endDate: "2015-12-12",
        minCount: 3000,
        maxCount: 3005,
      });
      expect(response.statusCode).toBe(200);
    });
    // should respond with statusCode=>404 due to endpoint typo or unavailable endpoint
    test("should respond with 404 status code", async () => {
      const response = await request(app).post("/recors").send({
        startDate: "2014-01-01",
        endDate: "2015-12-12",
        minCount: 3000,
        maxCount: 3005,
      });
      expect(response.statusCode).toBe(404);
    });
    // should respond with statusCode=>400 due to wrong logic(endDate should be greater than startDate etc.)
    test("should respond with 400 status code", async () => {
      const response = await request(app).post("/records").send({
        startDate: "2014-01-01",
        endDate: "2015-12-12",
        minCount: 3000,
        maxCount: 1,
      });
      expect(response.statusCode).toBe(400);
      expect(response.body.msg).toBe(
        "'maxCount' must be greater than or equals to 'minCount'"
      );
    });
  });

  describe("missing fields on body", () => {
    // should respond statusCode=> 400 due to missing field on body(maxCount)
    test("should respond with 400 status code", async () => {
      const response = await request(app).post("/records").send({
        startDate: "2014-01-01",
        endDate: "2015-12-12",
        minCount: 3000,
      });
      expect(response.statusCode).toBe(400);
      expect(response.body.msg).toBe("'maxCount' is a required field");
    });
    // should respond statusCode=> 400 due to missing field on body(endDate)
    test("should respond with 400 status code", async () => {
      const response = await request(app).post("/records").send({
        startDate: "2014-01-01",
        minCount: 3000,
        maxCount: 300,
      });
      expect(response.statusCode).toBe(400);
      expect(response.body.msg).toBe("'endDate' is a required field");
    });
  });
  //TODO
  // afterEach(async () => {
  //   await connection.close(/*force:*/ true); // <-- important
  // });
});
