const { Client } = require('pg');

const client = new Client({
  connectionString: "postgresql://admin:admin@192.168.225.86:5432/users"
});

const connectDB = async () => {
  try {
    console.log('Connect to Postgres ...');
    client.connect();
  } catch (err) {
    console.log('Error while connecting to DB')
  }
}

connectDB();