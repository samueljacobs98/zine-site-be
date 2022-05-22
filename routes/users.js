const express = require("express");
const router = express.Router();

const { updateUser, deleteUser, getUserById } = require("../controllers/users");

router.route("/").patch(updateUser).delete(deleteUser);
router.route("/:id").get(getUserById);

module.exports = router;
