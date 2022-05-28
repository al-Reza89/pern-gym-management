// const { Pool } = require("pg");

// const pool = new Pool();
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };


import { Pool } from "pg";

const pool = new Pool();
exports const pool = {
  query: (text, params) => pool.query(text, params),
};