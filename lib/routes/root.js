const handler = async (req, rep) => {
  rep.send({ message: "Hello!" });
  throw new Error("What a cool error!");
};

const route = {
  method: "GET",
  url: "/",
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" }
        }
      }
    }
  }, // adding a schema can increase response time by up to 20%
  handler
};

export default route;
