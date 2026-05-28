const request = require("supertest");
const app = require("../app");

describe("Session Creation API", () => {

    test("should create session successfully", async () => {

        const res = await request(app)
            .post("/session/create")
            .send({
                userId: "123"
            });

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);

    });

});
