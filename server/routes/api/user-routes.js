// Took from gary's repo

const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  newUser,
  authLogin,
  lookupUserByToken,
} = require("../../controllers/user-controller");

// Declare the routes that point to the controllers above
router.route("/").get(getAllUsers);
router.route("/").post(newUser);

router.route("/auth").post(authLogin);
router.route("/lookup").get(lookupUserByToken);

router.route("/:id").get(getUserById);

module.exports = router;
