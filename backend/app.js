const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");
const dbConnection = require("./database/config");
const websocket = require("websocket");

const app = express();
dbConnection();

require("dotenv").config();

// 3rd Party Modules
app.use(logger("dev"));
// app.use(helmet());
// app.use(cors);

// run express
app.use(express.json());

//run websocket
http.createServer(app).listen();

// routers
app.use("/samshiseaki/auth", require("./routes/auth"));
app.use("/samshiseaki/meal", require("./routes/meal"));
app.use("/samshiseaki/nth", require("./routes/nth"));

// listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

var server = http.createServer(app).listen(3000, function () {
  console.log("Express server listening");
});

var wsServer = new webSocketServer({
  httpServer: server,
});
