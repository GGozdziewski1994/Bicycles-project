const express = require("express");
const {
  addBike,
  getAllBikes,
  updateBike,
  addAdmin,
  getAdmin,
} = require("./bikesController");

const router = express.Router();

router.post("/bike", addBike);
router.get("/bikes", getAllBikes);
router.put("/update/:item_id", updateBike);
router.post("/admin", addAdmin);
router.get("/admins", getAdmin);

module.exports = {
  routes: router,
};
