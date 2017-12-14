//require burger.js file and express
var pasta = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    //A get to the route "/" will call the getPasta function from burger.js to get all the entries in the pastaDishes table
    pasta.getAllPasta(function(err, data){
       if(err) {return res.status(500).end();}
       var hbsObj = {pasta: data}; //data is our array of data objects for each pasta, put in object so we can pass it to handlebars to render
       res.render("index", hbsObj); //we want to render the index page with the pasta objects in it!
   }); 
});

router.post("/", function(req,res){
    if(req.body.newNoodle != ""){//as long as the user entered something into input
        //A post to the route "/" will call the create function from burger.js to add a new entry to the pastaDishes table
        pasta.create(req.body.newNoodle, function(err, data){
            if(err) {return res.status(500).end();}
            res.redirect("/"); //redirect to get "/" to get new entry (reload page)
       }); 
    }
});

router.put("/:id", function(req,res){
    //A put to the route "/:id" will call the update function from burger.js to update an existing entry in the pastaDishes table with the given id
    pasta.update(req.params.id, function(err, data){//the id is gotten from the parameters
        if(err) {return res.status(500).end();}
        res.status(200).end();//status = good to go! (the page reload will take place in clientside js)
    });
});


module.exports = router;