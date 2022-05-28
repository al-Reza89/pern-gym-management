// const db = require("../db");

// const getUsers = async (req, res) => {
//   try {
//     // const results = await db.query("select * from restaurants");
//     // console.log(results);
//     // results will always shows in rows
//     const restaurantRatingData = await db.query("select * from members_signup");
//     // console.log(restaurantRatingData);
//     res.status(200).json({
//       status: "success",
//       results: restaurantRatingData.rows.length,
//       data: {
//         restaurants: restaurantRatingData.rows,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = {
//   getUsers,
// };

import db from "../db/index.js";

export const getUsers = async (req, res) => {
  try {
    // const results = await db.query("select * from restaurants");
    // console.log(results);
    // results will always shows in rows
    const restaurantRatingData = await db.query("select * from members_signup");
    // console.log(restaurantRatingData);
    res.status(200).json({
      status: "success",
      results: restaurantRatingData.rows.length,
      data: {
        restaurants: restaurantRatingData.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
