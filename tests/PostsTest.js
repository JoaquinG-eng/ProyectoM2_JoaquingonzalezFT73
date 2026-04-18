import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../src/app.js";

describe("Posts API", () => { 

it("GET /posts", async () => {

const res = await request(app).get("/posts");

expect(res.status).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
});

it("POST /posts", async () => { 
const newPost = {
title: "Post de prueba",
content: "Contenido de prueba",
author_id: 1
};

const res = await request(app)
.post("/posts")
.send(newPost);

expect(res.status).toBe(201);
expect(res.body).toHaveProperty("id");
expect(res.body.title).toBe(newPost.title);
expect(res.body.content).toBe(newPost.content); 
expect(res.body.author_id).toBe(newPost.author_id); 
});

});