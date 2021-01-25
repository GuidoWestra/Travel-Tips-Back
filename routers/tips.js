const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Tip = require("../models/").tip;

const router = new Router();

router.get("/tips/:placeId", async (req, res, next) => {
  try {
    const placeId = req.params.placeId;
    const result = await Tip.findAll({ where: { placeId } });

    if (!result.length) return res.status(404).send({ message: "No Tips found" });

    if (result) return res.status(200).send({ message: "Tips fetched!", data: result });
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong in /tips/placeId!" });
  }
});

router.get("/tips/:placeId", async (req, res, next) => {
  try {
    const placeId = req.params.placeId;
    const result = await Tip.findAll({ where: { placeId } });

    if (!result.length) return res.status(404).send({ message: "No Tips found" });

    if (result) return res.status(200).send({ message: "Tips fetched!", data: result });
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong in /tips/placeId!" });
  }
});

module.exports = router;
