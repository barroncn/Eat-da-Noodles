//Routes Controller
//========================================================================================================================================

//require burger.js file and express
var pasta = require("../models/burger.js"); // require the burger.js file
var express = require("express"); // require the express module

var router = express.Router();

router.get("/", function(req,res){
    //A get to the route "/" will call the getAllPasta function from burger.js to get all the entries in the pastaDishes table
    pasta.getAllPasta(function(err, data){
       if(err) {return res.status(500).end();}
       var hbsObj = {pasta: data}; // data is our array of data objects for each pasta, put in an object so we can pass it to handlebars
       res.render("index", hbsObj); // We want to render the index page with the pasta objects in it
   }); 
});

router.post("/", function(req,res){
    if(req.body.newNoodle != ""){//as long as the user entered something into input
        //A post to the route "/" will call the create function from burger.js to add a new entry to the pastaDishes table
        pasta.create(req.body.newNoodle, function(err, data){//the new pasta name is gotten from the "name=newNoodle" in the POST form
            if(err) {return res.status(500).end();}
            res.redirect("/"); //redirect to get "/" to reload page with new entry
       }); 
    }
});

router.put("/:id", function(req,res){
    //A put to the route "/id" will call the update function from burger.js to update an existing entry in the pastaDishes table with the given id
    pasta.update(req.params.id, function(err, data){//the id is gotten from the parameters
        if(err) {return res.status(500).end();}
        res.status(200).end();//status = good to go! (the page reload will take place in clientside js)
    });
});


module.exports = router; //Export router