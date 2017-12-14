//Table Specific Functions
//========================================================================================================================================

var orm = require("../config/orm.js"); //Require the orm.js file

//functions for our pastaDishes table
var pasta = {
    getAllPasta : function(cb){
        //calls orm getAllOrdered function to get all entries ordered by date
        orm.getAllOrdered("pastaDishes", "date", function(err, res){
            if(err) {return res.status(500).end();}
            cb(err, res); //array of objects
        });
    },
    create : function(newPasta, cb){
        //calls orm createOne function to add a new pasta with the given "newPasta" name
        orm.createOne("pastaDishes", "pasta_name", newPasta, function(err, res){
            if(err) {return res.status(500).end();}
            cb(err, res); //successful completion object fro mySQL
        });
    },
    update : function(pastaID, cb){
        //calls orm updateOne function to update the devoured column of the pasta with the given id, "pastaID", to true
        orm.updateOne("pastaDishes", "devoured", true, "id", pastaID, function(err, res){
            if(err) {return res.status(500).end();}
            cb(err, res); //successful completion object fro mySQL
        });
    }
};

module.exports = pasta; //export the pasta object