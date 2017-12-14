//Require the orm.js file
var orm = require("../config/orm.js");

//functions for our pastaDishes table
var pasta = {
    getAllPasta : function(cb){
        //calls orm getAllOrdered function to get entries from pastaDishes table ordered by date
        orm.getAllOrdered("pastaDishes", "date", function(err, res){
            if(err) {return res.status(500).end();}
            cb(err, res); //array of objects
        });
    },
    create : function(newPasta, cb){
        //calls orm createOne function to add a new pasta to pastaDishes table with given newPasta name
        orm.createOne("pastaDishes", "pasta_name", newPasta, function(err, res){
            if(err) {return res.status(500).end();}
            cb(err, res); //successful completion object fro mySQL
        });
    },
    update : function(pastaID, cb){
        //calls orm updateOne function to update the devoured column of a given ID to true
        orm.updateOne("pastaDishes", "devoured", true, "id", pastaID, function(err, res){
            if(err) {return res.status(500).end();}
            cb(err, res); //successful completion object fro mySQL
        });
    }
};

module.exports = pasta;