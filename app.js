const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.render("index");
});



app.post("/",function(req,res){
  
  const testPass = "SmartServTest@123";
  const password = req.body.password;

  if(password === testPass){
    res.render("dashboard");
  }
  else{
    res.redirect("/");

  }

});








app.listen(3000,function(){
  console.log("Successfull running on port 3000");
});
