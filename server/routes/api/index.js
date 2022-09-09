// Took from gary's repo
const router = require("express").Router();
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
module.exports = router;
