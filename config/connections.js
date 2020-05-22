//put sql connections here

const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else{
const connection = mysql.createConnection({
  host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "dz7f5g1b4v7xf8jb",
  password: "ywromwyrq17g0qr",
  database: "ec9f2ignbtug7d6v"
});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection