const createZine = (req, res) => {
  res.send("create zine");
};

const getAllZines = (req, res) => {
  res.send("get all zines");
};

const getZineById = (req, res) => {
  res.send("get zine by id");
};

const deleteZineById = (req, res) => {
  res.send("delete zine by id");
};

const updateZineById = (req, res) => {
  res.send("update zine by id");
};

const createSeries = (req, res) => {
  res.send("create new series");
};

const getSeriesById = (req, res) => {
  res.send("get series by id");
};

const updateSeriesById = (req, res) => {
  res.send("update series by id");
};

const deleteSeriesById = (req, res) => {
  res.send("delete series by id");
};

module.exports = {
  createZine,
  getAllZines,
  getZineById,
  deleteZineById,
  updateZineById,
  createSeries,
  getSeriesById,
  updateSeriesById,
  deleteSeriesById,
};
