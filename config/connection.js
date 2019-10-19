// Set up MySQL connection.
var mysql = require("mysql");
var connection;

JAWSDB_URL = "mysql://rb7x7omwqrvxxjvj:g8gc7g19zssjjz11@vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ytrfbavxd69p14sp"


if (JAWSDB_URL) {
  connection = mysql.createConnection(JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "coleakenta",
    database: "burgers_db"

  })
}



// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;