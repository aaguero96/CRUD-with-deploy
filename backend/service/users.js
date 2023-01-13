const userModel = require('../model/users');

const getAll = async () => {
  try {
    const result = await userModel.getAll();
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = {
  getAll,
}