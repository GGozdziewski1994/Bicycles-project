const db = require("./db");
const firestore = db.firestore();

const addBike = async (req, res) => {
  try {
    const data = req.body;
    await firestore.collection("bikes").doc().set(data);
    return res.send("Saved successfully");
  } catch (error) {
    return res.send(400).send(error.message);
  }
};

const getAllBikes = async (req, res) => {
  try {
    const bikes = await firestore.collection("bikes");
    const data = await bikes.get();
    const bikesArray = [];
    if (data.empty) res.status(404).send("No bikes found");

    data.forEach((doc) => {
      const bike = {
        id: doc.id,
        img: doc.data().img,
        isAddComment: doc.data().isAddComment,
        isComment: doc.data().isComment,
        model: doc.data().model,
        price: doc.data().price,
        comments: doc.data().comments,
        ratings: doc.data().ratings,
        type: doc.data().type,
      };
      bikesArray.push(bike);
    });
    return res.send(bikesArray);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const updateBike = async (req, res) => {
  try {
    const data = req.body;
    await firestore.collection("bikes").doc(req.params.item_id).update(data);
    return res.send("Successfully updated");
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const addAdmin = async (req, res) => {
  try {
    const data = req.body;
    await firestore.collection("admin").doc().set(data);
    return res.send("Saved successfully");
  } catch (error) {
    return res.send(400).send(error.message);
  }
};

const getAdmin = async (req, res) => {
  try {
    const admins = await firestore.collection("admin");
    const data = await admins.get();
    const adminsArray = [];
    if (data.empty) res.status(404).send("No bikes found");

    data.forEach((doc) => {
      const admin = {
        id: doc.id,
        admin: doc.data().admin,
        email: doc.data().email,
      };
      adminsArray.push(admin);
    });
    return res.send(adminsArray);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  addBike,
  getAllBikes,
  updateBike,
  addAdmin,
  getAdmin,
};

