import * as helmet from "fastify-helmet";
import cors from "cors";
import errorPlugin from "./errorPlugin";

const addMiddlewares = app => {
  app.register(helmet);
  app.use(cors());
  app.setErrorHandler(errorPlugin(app));
};

export default addMiddlewares;
