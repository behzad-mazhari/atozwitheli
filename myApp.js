var express = require('express');
var bodyParser = require('body-parser');
const { userPassedConsoleChallenge } = require('fcc-express-bground/globals');
const urlencoded = require('body-parser/lib/types/urlencoded');
const mongoose = require('mongoose');
const Register = require('./models/register');

// express app
var app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://eli:atozwitheli09124830298@atozwitheli.5drtsa8.mongodb.net/atozwitheli?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true} )
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

// mongoose and mongo sandbox routes
// app.get('/add-register', (req, res) => {
  
//   const register = new Register({
//     name : 'behzad',
//     contact: '09122180916'
//   });
  
  
//   register.save()
//     .then((result) => {
//       res.send(result);
      
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// });

app.get('/all-registers', (req,  res) => {
  
  Register.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/videos", express.static(__dirname + "/videos"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/views", express.static(__dirname + "/views"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/models", express.static(__dirname + "/models"));

app.post("/new_student", (req, res) => {
  console.log(`NEW STUDENT *** name: ${req.body.name}, contact: ${req.body.contact}, language: ${req.body.fav_language}`);
  //next();    
  //res.write('new student');
  const register = new Register({
    name : req.body.name,
    contact: req.body.contact,
    language: req.body.fav_language
  });
  
  
  register.save()
    // .then((result) => {
    //   res.send(result);
      
    // })
    .catch((err) => {
      console.log(err);
    })

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "El!09124830298",
    database: "students"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to mysql!");
    con.query(`INSERT INTO Students(name, language, contact) VALUES ('${req.body.name}','${req.body.contact}','${req.body.fav_language}');`, function (err, result) {
      if (err) throw err;
      console.log("Database updated");
    });
  });
  // res.redirect("__dirname + '/views/contact.html'");  
  res.status(204).send()


})


app.get("/about", (req, res) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    res.sendFile(__dirname + '/views/about.html');
    //next();
})

app.get("/blog", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.sendFile(__dirname + '/views/blog.html');
  //next();
})

app.get("/contact", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.sendFile(__dirname + '/views/contact.html');
  //next();
})

app.get("/courses", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.sendFile(__dirname + '/views/courses.html');
  //next();
})

app.get("/", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  res.sendFile(__dirname + '/views/index.html');
  //next();
})

app.get("/admin", (req, res) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "El!09124830298",
        database: "students"
    });

    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM Students", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
    });
  
  // //next();
  // res.end('checked')
  
})

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("students", function(err, res) {
//     if (err) throw err;
//     console.log("Students' collection created!");
//     db.close();
//   });
// }); 


module.exports = app;
