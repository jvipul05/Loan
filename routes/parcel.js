const express= require("express");
const router = express.Router();

const {createParcel} =require("../controllers/parcelController");

router.post("/createParcel/:id",createParcel);

module.exports = router;