const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "your_database_name",
  password: "password",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
