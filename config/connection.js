// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
  //Heroku Deployment
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  local host
mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});
// mysql.createConnection({
//   port: 3306,
//   host: "ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "hjl47kl192nyafhp",
//   password: "root",
//   database: "burgers_db"
// });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
