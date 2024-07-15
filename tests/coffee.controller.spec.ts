// import request from "supertest";
// import express from "express";
// import { getAllCoffeeBags } from "../controllers/coffee.controller";
// import URL from "../configs/api-urls.config";
// import { MockCoffeeBags } from "../mocks";

// // Create an Express app
// const app = express();

// // Set up the route
// app.get(URL.COFFEE.BASE, getAllCoffeeBags);

// describe("GET /coffee", () => {
//     it("should return a 200 status and the coffee collection", async () => {
//         const response = await request(app).get("/coffee");
//         expect(response.status).toBe(200);
//         expect(response.body).toEqual(MockCoffeeBags);
//     });
// });
