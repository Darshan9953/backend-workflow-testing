const request = require("supertest");
const app = require("../app");

describe("Storage Validation", () => {

    test("should save interview data", async () => {

        const res = await request(app)
            .post("/interview/save")
            .send({
                answer: "Testing answer"
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.saved).toBe(true);

    });

});
