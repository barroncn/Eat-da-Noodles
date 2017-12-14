//Controls where everything goes ....GET, POST, LOGIC, etc

//require model also
//require express
//var router = express.Router(); //this is like a miniapp...we use this to separate things out and handle lots of requests: has .get and .post and many of the same things that express() has;

//router.get("/", function(req, res){
    
    //here cats called the all method to get all the data...
    
//whatever you want to do

//res.json or res.send or res.status or res.render();

// }

var pasta = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
   pasta.getPasta(function(data){
       var hbsObj = {pasta: data}; //data is our array of data objects for each pasta
       res.render("index", hbsObj); //we want to render the index page with the pasta objects in it!
   }); 
});

router.post("/", function(req,res){
    if(req.body.newNoodle != ""){
       pasta.create(req.body.newNoodle, function(data){
            res.redirect("/"); 
            
       }); 
    }
});

router.put("/", function(req,res){
    pasta.update(req.body.id, function(data){
        //res.redirect("/");
        res.status(200).end();
    });
});


module.exports = router;