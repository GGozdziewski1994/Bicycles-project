const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const bikesRoutes = require("./bikes-routes");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api", bikesRoutes.routes);

exports.app = functions.https.onRequest(app);
