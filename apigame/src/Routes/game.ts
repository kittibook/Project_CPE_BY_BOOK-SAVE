import { Elysia } from "elysia";

export const gamne = new Elysia({ prefix : "/game"})
  .get("/", () => "Hello Game")