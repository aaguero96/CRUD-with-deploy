const userService = require('../service/users');

const getAll = async (_, res) => {
  try {
    const result = await userService.getAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({err})
  }
};

module.exports = {
  getAll,
}