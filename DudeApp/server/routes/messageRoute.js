const express = require("express");
const verifytoken = require("../middleware/verifyToken");
const { ObjectId } = require("mongodb");
const route = express.Router();
const createConnection = require("../config/connection");

route.get("/get-message", verifytoken, (req, res) => {});

route.post("/create-message", verifytoken, (req, res) => {});

module.exports = route;
