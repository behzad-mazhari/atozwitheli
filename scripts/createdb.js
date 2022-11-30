var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "El!09124830298",
  database: 'students'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE TABLE Students(name varchar(30), language varchar(30), contact varchar(30));", function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});