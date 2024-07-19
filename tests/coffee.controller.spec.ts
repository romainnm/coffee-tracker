import request from "supertest";
import express from "express";
import mongoose from "mongoose";
import {
    getAllCoffeeBags,
    createCoffeeBag,
    getCoffeeBag,
    updateCoffeeBag,
    deleteCoffeeBag,
} from "../controllers/coffee.controller";
import URL from "../configs/api-urls.config";
import { MockCoffeeBags } from "../mocks";
import { describe, it, expect, beforeAll, afterAll } from "@jest/globals";
import { MongoMemoryServer } from "mongodb-memory-server";
import { CoffeeBagModel } from "../models";

// Create an Express app
const app = express();
app.use(express.json());

// Setup MongoDB Memory Server
let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
    await CoffeeBagModel.insertMany(MockCoffeeBags.data);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

// Set up the route
app.get(URL.COFFEE.BASE, getAllCoffeeBags);
app.post(URL.COFFEE.BASE, createCoffeeBag);
app.get(URL.COFFEE.BASE + URL.COFFEE.PARAMS[0], getCoffeeBag);
app.patch(URL.COFFEE.BASE + URL.COFFEE.PARAMS[0], updateCoffeeBag);
app.delete(URL.COFFEE.BASE + URL.COFFEE.PARAMS[0], deleteCoffeeBag);

describe("GET /coffee", () => {
    it("should return a 200 status and the coffee collection", async () => {
        const response = await request(app).get(URL.COFFEE.BASE);
        expect(response.status).toBe(200);
        expect(response.body.data[0].name).toEqual(MockCoffeeBags.data[0].name);
        expect(response.body.data[1].name).toEqual(MockCoffeeBags.data[1].name);
        expect(response.body.data[2].name).toEqual(MockCoffeeBags.data[2].name);
    });

    it("should return a 200 status and an empty array when no coffee bags", async () => {
        await CoffeeBagModel.deleteMany({});
        const response = await request(app).get(URL.COFFEE.BASE);
        expect(response.status).toBe(200);
        expect(response.body.data).toEqual([]);
    });
});

describe("POST /coffee", () => {
    it("should return a 201 status and return data of new item created", async () => {
        const newCoffeeBag = {
            name: "Kenya AA",
            brand: "Stumptown",
            status: "new",
            archived: false,
            createdAt: new Date(),
        };
        const response = await request(app)
            .post(URL.COFFEE.BASE)
            .send(newCoffeeBag);
        expect(response.body.data.name).toEqual(newCoffeeBag.name);
    });

    it("should return a 500 status when missing required fields", async () => {
        const incompleteCoffeeBag = {
            status: "new",
            archived: false,
        };
        const response = await request(app)
            .post(URL.COFFEE.BASE)
            .send(incompleteCoffeeBag);
        expect(response.status).toBe(500);
    });

    it("should return a 400 status when providing invalid data", async () => {
        const invalidCoffeeBag = {
            name: "Kenya AA",
            brand: "Stumptown",
            status: 123, // Invalid data type
            archived: false,
        };
        const response = await request(app)
            .post(URL.COFFEE.BASE)
            .send(invalidCoffeeBag);
        expect(response.status).toBe(500);
    });
});

describe("GET /coffee/:id", () => {
    it("should return a 200 status and single coffee bag", async () => {
        const coffeeBag = await CoffeeBagModel.findOne();
        const response = await request(app).get(
            `${URL.COFFEE.BASE}/${coffeeBag?._id}`,
        );
        expect(response.status).toBe(200);
        expect(response.body.data.name).toEqual(coffeeBag?.name);
    });

    // it("should return a 404 status when coffee bag not found", async () => {
    //     const response = await request(app).get(`${URL.COFFEE.BASE}/invalidid`);
    //     expect(response.status).toBe(404);
    // });
});

describe("PATCH /coffee/:id", () => {
    it("should return a 200 status and update text message", async () => {
        const coffeeBag = await CoffeeBagModel.findOne();
        const response = await request(app).patch(
            `${URL.COFFEE.BASE}/${coffeeBag?._id}`,
        );
        expect(response.status).toBe(200);
        expect(response.body.msg).toBe(`${coffeeBag?.name} has been updated!`);
    });
});

describe("DELETE /coffee/:id", () => {
    it("should return a 200 status and deletion text message", async () => {
        const coffeeBag = await CoffeeBagModel.findOne();
        const response = await request(app).delete(
            `${URL.COFFEE.BASE}/${coffeeBag?._id}`,
        );
        expect(response.status).toBe(200);
        expect(response.body.msg).toBe(`${coffeeBag?.name} has been deleted!`);
    });
});
