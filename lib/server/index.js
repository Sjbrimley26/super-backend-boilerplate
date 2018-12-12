import fastify from "fastify";
import { root, addMiddlewares } from "../routes";

const app = fastify({
  logger: true
});

addMiddlewares(app);

app.route(root);

export default app;
