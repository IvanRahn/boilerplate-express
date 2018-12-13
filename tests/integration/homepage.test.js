const app = require("./../../app");
const supertest = require("supertest");

describe("Can render homepage", () => {
    test("GET / renders homepage", async () => {
        const response = await supertest(app)
            .get("/")
            .expect(200);
    })
})