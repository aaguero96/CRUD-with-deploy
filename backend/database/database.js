const { Client } = require('pg');

// connectionString: "postgresql://admin:admin@192.168.225.86:5432/users",
const clientGenerator = (database, user, password) => {
  return new Client({
    user: user,
    host: 'localhost',
    database: database,
    password: password,
    port: '5432'
  })
};

const connectDB = (database, user, password) => {
  try {
    console.log(`Connect to database ${database} ...`);
    const client = clientGenerator(database, user, password);
    client.connect()
    return client;
  } catch (err) {
    console.log('Error while connecting to DB');
  }
}

module.exports = connectDB;