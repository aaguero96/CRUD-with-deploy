const db = require('./connection');

const getAll = async () => {
  try {
    const {rows: result} = await db.query("SELECT * FROM users");
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = {
  getAll,
}