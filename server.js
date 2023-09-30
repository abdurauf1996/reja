const http = require("http");

const mongodb = require("mongodb");

let db;
connectionString =
  "mongodb+srv://Bn:@atlascluster.osz5yqh.mongodb.net/Reja?authSourve=ad";

const connectionString = mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");

      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}  `
        );
      });
    }
  }
);
