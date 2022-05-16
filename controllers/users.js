const getUser = (req, res) => {
  res.send("get user");
};

const updateUser = (req, res) => {
  res.send("update user");
};

const deleteUser = (req, res) => {
  res.send("delete user");
};

const getUserById = (req, res) => {
  res.send("get user by id");
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getUserById,
};
