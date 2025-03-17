import { Elysia } from "elysia";
import { gamne } from "./Routes/game";
import { jwt } from '@elysiajs/jwt'
import { auth } from "./Routes/auth";
const app = new Elysia()
  .use(
    jwt({
        name: 'jwt',
        secret: 'kittipon book'
    })
  )
  .get("/", () => "Hello Elysia")
  .use(gamne)
  .use(auth)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
