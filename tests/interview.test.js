const request = require("supertest");
const app = require("../app");

describe("Interview API", () => {

    test("should start interview", async () => {

        const res = await request(app)
            .post("/interview/start");

        expect(res.statusCode).toBe(200);
        expect(res.body.started).toBe(true);

    });

});
