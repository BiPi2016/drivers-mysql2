const http = require("http");
const app = require("./app");

const port = process.env.PORT || 6000;

const server = http.createServer(app);

const db = require("./models/index");

db.sequelize
  .sync()
  .then((result) => {
    console.log("Connected to DB");
    server.listen(port, () => console.log(`Server running on ${port}`));
  })
  .catch((err) => {
    console.log("Error occured while connecting to DB");
    console.log(err);
  });
