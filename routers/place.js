const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Place = require("../models").place;

const router = new Router();

router.get("/places/list", async (req, res, next) => {
  try {
    const result = await Place.findAll();
    if (result) return res.status(200).send({ message: "Places fetched!", data: result });
    if (!result) return res.status(404).send({ message: "No places found" });
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong in /places/list!" });
  }
});

router.get("/places/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Place.findByPk(id);
    if (result) return res.status(200).send({ message: "Places fetched!", data: result });
    if (!result) return res.status(404).send({ message: "Place with given id was not found!" });
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong in places/:id" });
  }
});

router.post("/places", async (req, res, next) => {
  try {
    const { name, description, city, photo } = req.body;
    if (!name) {
      return res.status(400).send({ message: "Please provide a name!" });
    }
    const newPlace = await Place.create({
      name,
      description,
      city,
      photo,
    });

    if (newPlace) return res.status(200).send({ message: "Place created", data: newPlace });

    if (!newPlace) return res.status(404).send({ message: "Place was already present" });
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong in post places" });
  }
});

module.exports = router;
