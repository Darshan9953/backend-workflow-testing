const request = require("supertest");
const app = require("../app");

describe("Concurrent Interview Testing", () => {

    test("should handle multiple concurrent requests", async () => {

        const requests = [];

        for(let i = 0; i < 20; i++) {

            requests.push(
                request(app)
                    .post("/interview/start")
            );

        }

        const responses = await Promise.all(requests);

        responses.forEach((res) => {

            expect(res.statusCode).toBe(200);

        });

    });

});
