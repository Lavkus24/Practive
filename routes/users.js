const router = require("express").Router();
module.exports = router;

router.get("/", (req, res) => {
  res.send("Hey it ia uset route");
});
