import ErrorHandler from "./ErrorHandler";

const errorPlugin = fastify => async (err, req, rep) => {
  if (err) {
    fastify.log.info(ErrorHandler.getColor());
  }
  rep.sent = true;
};

export default errorPlugin;
