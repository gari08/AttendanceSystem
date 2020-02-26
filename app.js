const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/attendanceDB", {useNewUrlParser: true});

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

const emplSchema = new mongoose.Schema({
    empID: {type: Number, unique: true },
    password: {type: String}

});

const Employee = mongoose.model("Employee", emplSchema);

const employee = new Employee({
    empID: 1234,
    password: "palak1234"
});

employee.save();



app.listen(3000, function(){
    console.log("Server is running on port 3000");
});