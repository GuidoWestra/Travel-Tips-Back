const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Like = require("../models/").like;

const router = new Router();

router.get("/likes", async (req, res, next) => {
  try {
    const tipId = req.params.tipId;
    const result = await Like.findAll();

    if (result)
      return res.status(200).send({ message: "Likes fetched!", data: result });
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong in /likes" });
  }
});
router.post("/likes/add", authMiddleware, async (req, res, next) => {
  try {
    const { tipId } = req.body;
    const { id } = req.user;

    console.log(`tip id, user id`, tipId, id);

    const like = await Like.findOne({ where: { userId: id, tipId: tipId } });
    if (like)
      return res.status(400).send({ message: "User already liked this" });
    const result = await Like.create({
      userId: id,
      tipId,
    });
    if (result) return res.status(200).send({ message: "Like!", data: result });
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Something went wrong inside POST likes" });
  }
});
router.delete("/likes/:tipId", authMiddleware, async (req, res, next) => {
  try {
    const tipId = req.params.tipId;
    const { id } = req.user;
    const result = await Like.destroy({
      where: {
        userId: id,
        tipId,
      },
    });
    if (result)
      return res.status(200).send({ message: "Like destroyed!", data: result });
  } catch (e) {
    return res
      .status(400)
      .send({ message: "Something went wrong inside delete likes" });
  }
});

module.exports = router;
