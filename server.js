const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiData = require('./javascript/data.js');
const app = express();
let PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

//HTML ROUTES
app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "/html/survey.html"));
});

app.get('/results', function (req, res) {
  res.sendFile(path.join(__dirname, "/html/results.html"));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/html/home.html"));
});

//API ROUTES
app.get('/api', function(req, res){
  res.json(apiData.savedStudents);
});
app.get('/api/canhelp', function(req, res){
  res.json(apiData.canHelp);
});
app.get('/api/needhelp', function(req, res){
  res.json(apiData.needHelp);
});

app.post("/newStudent", function(req, res){
  var student = req.body;
  apiData.savedStudents.push(student);
  res.send(apiData.savedStudents);
});

// app.post("/canHelpStudents", function(req, res){
//   var student = req.body;
//   apiData.canHelp.push(student);
//   res.send(apiData.canHelp);
// });

// app.post("/needHelpStudents", function(req, res){
//   var student = req.body;
//   apiData.needHelp.push(student);
//   res.send(apiData.needHelp);
// });


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});