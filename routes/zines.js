const express = require("express");
const router = express.Router();

const {
  createZine,
  getAllZines,
  getZineById,
  deleteZineById,
  updateZineById,
  createSeries,
  getSeriesById,
  updateSeriesById,
  deleteSeriesById,
} = require("../controllers/zines");

router.route("/series").post(createSeries);

router
  .route("/series/:id")
  .get(getSeriesById)
  .patch(updateSeriesById)
  .delete(deleteSeriesById);

router.route("/").get(getAllZines).post(createZine);

router
  .route("/:id")
  .get(getZineById)
  .delete(deleteZineById)
  .patch(updateZineById);

module.exports = router;
