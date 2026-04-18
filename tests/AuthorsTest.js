import request from "supertest"; 
import { describe, it, expect } from "vitest"; 
import app from "../src/app.js"; 

describe("Authors API", () => { 

it("GET /authors", async () => { 
const res = await request(app).get("/authors"); 

expect(res.status).toBe(200);
expect(Array.isArray(res.body)).toBe(true);
});

it("POST /authors", async () => {
    const newAuthor = {
name: "Joaquín",
email: "joa@test.com"
    };

    const res = await request(app)
.post("/authors")
.send(newAuthor);

expect(res.status).toBe(201);
expect(res.body).toHaveProperty("id");
expect(res.body.name).toBe(newAuthor.name);
expect(res.body.email).toBe(newAuthor.email);
});

});