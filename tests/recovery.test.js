const request = require("supertest");
const app = require("../app");

describe("Recovery Validation", () => {

    test("should recover session", async () => {

        const res = await request(app)
            .get("/interview/recover");

        expect(res.statusCode).toBe(200);
        expect(res.body.recovered).toBe(true);

    });

});
