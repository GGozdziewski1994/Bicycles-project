const admin = require("firebase-admin");
const serviceAccount = require("./config");

const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bikesapp-gg-default-rtdb.europe-west1.firebasedatabase.app",
});

module.exports = db;
