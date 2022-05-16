const express = require("express");
const router = express.Router();

const {
  getUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/users");

router.route("/").get(getUser).patch(updateUser).delete(deleteUser);
router.route("/:id").get(getUserById);

module.exports = router;
