const express = require("express");
const router = express.Router();
const client = require("./../connection.js");
const query = require("./../models/vendor_room.js");

router.use(express.json());

router.post("/", async (req, res) => {
  client.query(query, (err, result) => {});

  client.query(
    `select vendors.id , vendors.room1 , vendors.room2 from vendors`,
    (err, result) => {
      if (!err) {
        console.log(result.rows[0]["room1"]);
        //   console.log(result.rows.length);

        for (i = 0; i < result.rows.length; i++) {
          // console.log(
          //   result.rows[i]["id"],
          //   result.rows[i]["room1"],
          //   result.rows[i]["room2"]
          // );

          client.query(
            `insert into vendor_room (vendor_id , room)
          values ('${result.rows[i]["id"]}','${result.rows[i]["room1"]}')`,

            (err, result) => {
              if (!err) {
              } else {
                console.log(err.message);
              }
            }
          );

          client.query(
            `insert into vendor_room (vendor_id , room)
          values ('${result.rows[i]["id"]}','${result.rows[i]["room2"]}')`,
            (err, result) => {
              if (!err) {
              } else [console.log(err.message)];
            }
          );
        }

        //   res.send(result.rows);
      } else {
        console.log(err.message);
      }
    }
  );

  res.send("DONE");
  client.end;
});

router.get("/", async (req, res) => {
  client.query("select * from vendor_room", (err, result) => {
    res.send(result.rows);
  });
  client.end;
});

// router.get("/", async (req, res) => {
//   client.query(`select * from vendors`, (err, result) => {
//     if (!err) {
//       res.send(result.rows);
//     } else {
//       console.log(err.message);
//     }
//   });
//   client.end;
// });

module.exports = router;
