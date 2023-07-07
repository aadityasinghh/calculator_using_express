const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1); //the result which the body-parser gives is text and so we need to explicitly convert the text into number ,it doesnt matter what is the type of input in the form ,even if its number we need to that conversion
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("the sum of the two number is " + result);
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
  console.log("Great your surver has been started on port 3000");
});
