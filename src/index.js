import "babel-polyfill";
import app from "../lib/server";

app.listen(3000, (err, address) => {
  if (err) {
    app.log(err);
    process.exit(1);
  }
  console.log(`Now listening on ${address}`);
});
