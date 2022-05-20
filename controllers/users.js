// get the logged in user
// for personal profile page
const getUser = (req, res) => {
  res.send("get user");
};

// edit the logged in user
const updateUser = (req, res) => {
  res.send("update user");
};

// delete the logged in user
const deleteUser = (req, res) => {
  res.send("delete user");
};

// get a specified user
// for other user's profile page
const getUserById = (req, res) => {
  res.send("get user by id");
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getUserById,
};
