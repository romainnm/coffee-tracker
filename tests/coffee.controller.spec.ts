// import request from "supertest";
// import express from "express";
// import mongoose from "mongoose";
// import {
//     getAllCoffeeBags,
//     createCoffeeBag,
//     getCoffeeBag,
//     updateCoffeeBag,
//     deleteCoffeeBag,
// } from "../controllers/coffee.controller";
// import URL from "../configs/api-urls.config";
// import { MockCoffeeBags } from "../mocks";
// import { describe, it, expect, beforeAll, afterAll } from "@jest/globals";
// import { MongoMemoryServer } from "mongodb-memory-server";
// import { CoffeeBagModel } from "../models";

// // Create an Express app
// const app = express();
// app.use(express.json());

// // Setup MongoDB Memory Server
// let mongoServer: MongoMemoryServer;

// beforeAll(async () => {
//     mongoServer = await MongoMemoryServer.create();
//     const uri = mongoServer.getUri();
//     await mongoose.connect(uri);
//     await CoffeeBagModel.insertMany(MockCoffeeBags);
// });

// afterAll(async () => {
//     await mongoose.disconnect();
//     await mongoServer.stop();
// });

// // Set up the route
// app.get(URL.COFFEE.BASE, getAllCoffeeBags);
// app.post(URL.COFFEE.BASE, createCoffeeBag);
// app.get(URL.COFFEE.BASE + URL.COFFEE.PARAMS[0], getCoffeeBag);
// app.patch(URL.COFFEE.BASE + URL.COFFEE.PARAMS[0], updateCoffeeBag);
// app.delete(URL.COFFEE.BASE + URL.COFFEE.PARAMS[0], deleteCoffeeBag);

// describe("GET /coffee", () => {
//     it("should return a 200 status and the coffee collection", async () => {
//         const response = await request(app).get(URL.COFFEE.BASE);
//         expect(response.status).toBe(200);
//         // expect(response.body.data).toEqual(MockCoffeeBags.data);
//     });
// });

// describe("POST /coffee", () => {
//     it("should return a 201 status and creation text message", async () => {
//         const response = await request(app).post(URL.COFFEE.BASE);
//         expect(response.status).toBe(201);
//         expect(response.text).toBe("Coffee created"); // TODO: temporary, to remove
//     });
// });

// describe("GET /coffee/:id", () => {
//     it("should return a 200 status and single coffee bag", async () => {
//         const response = await request(app).get(
//             URL.COFFEE.BASE + URL.COFFEE.PARAMS[0],
//         );
//         expect(response.status).toBe(200);
//         expect(response.body).toEqual(MockCoffeeBags.data[0]); // TODO: temporary, to remove
//     });
// });

// describe("PATCH /coffee/:id", () => {
//     it("should return a 200 status and update text message", async () => {
//         const response = await request(app).patch(
//             URL.COFFEE.BASE + URL.COFFEE.PARAMS[0],
//         );
//         expect(response.status).toBe(200);
//         expect(response.text).toBe("Coffee info updated"); // TODO: temporary, to remove
//     });
// });

// describe("DELETE /coffee/:id", () => {
//     it("should return a 200 status and deletion text message", async () => {
//         const response = await request(app).delete(
//             URL.COFFEE.BASE + URL.COFFEE.PARAMS[0],
//         );
//         expect(response.status).toBe(200);
//         expect(response.text).toBe("Coffee deleted"); // TODO: temporary, to remove
//     });
// });
