const { Router } = require("express");

const authMiddleware = require("../auth/middleware");

const Tip = require("../models/").tip;
const Like = require("../models").like;
const User = require("../models").user;
const Place = require("../models").place;

const router = new Router();

router.get("/tips/:placeId", async (req, res, next) => {
  try {
    const placeId = req.params.placeId;

    const result = await Tip.findAll({
      where: { placeId },
      order: [["createdAt", "DESC"]],
      include: [{ model: User }, { model: Place }],
    });

    console.log("this is result", result);

    if (!result.length)
      return res.status(404).send({ message: "No Tips found" });

    if (result) {
      const tipsWithPhoto = result.map((x) => ({
        id: x.id,
        placeId: x.placeId,
        placeName: x.place.name,
        placeCity: x.place.city,
        userName: x.user.name,
        text: x.text,
        userPhoto: x.user.photo,
        date: x.createdAt,
      }));
      return res
        .status(200)
        .send({ message: "Tips fetched!", data: tipsWithPhoto });
    }
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Something went wrong in /tips/placeId!" });
  }
});
router.get("/user/tips", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.user;
    const result = await Tip.findAll({
      where: { userId: id },
      order: [["createdAt", "DESC"]],
      include: [{ model: User }, { model: Place }],
    });

    if (!result.length)
      return res.status(404).send({ message: "No Tips found" });
    if (result) {
      const userTips = result.map((x) => ({
        id: x.id,
        placeId: x.placeId,
        placeName: x.place.name,
        placeCity: x.place.city,
        text: x.text,
        date: x.createdAt,
      }));
      return res.status(200).send({ message: "Tips fetched!", data: userTips });
    }
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Something went wrong in /tips/user!" });
  }
});
router.post("/tips", authMiddleware, async (req, res, next) => {
  try {
    const { placeId, text } = req.body;
    const { id, name } = req.user;
    if (!text)
      return res
        .status(400)
        .status({ message: "Please provide a placeId and text" });

    const result = await Tip.create({
      userId: id,
      userName: name,
      placeId,
      text,
    });

    if (result)
      return res.status(200).send({ message: "Tip created!", data: result });
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Something went wrong in POST /tips!" });
  }
});

router.delete("/tip/:tipId", authMiddleware, async (req, res, next) => {
  try {
    const tipId = req.params.tipId;

    const result = await Tip.destroy({
      where: {
        id: tipId,
      },
    });
    if (result)
      return res.status(200).send({ message: "Tip destroyed!", data: result });
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Something went wrong inside delete tip" });
  }
});

module.exports = router;
