//config folder holds stuff closest to the database
//orm is where all your queries will go!

var connection = require("../config/connection.js");

var orm = {
    getPasta: function(cb){
        var queryString = "SELECT * FROM pastaDishes";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result); //result will be an array of data objects in pastaDishes: [{id: "ID", pasta_name: pastaName, devoured: false, date: timestamp}, {....}, {....}]
        });
    },
    create: function(pastaName, cb){
        console.log(pastaName); //this is good
        var queryString = "INSERT INTO pastaDishes (pasta_name) VALUES ('" + pastaName + "')";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result); //there is no actual "result" per se, but result lets us know mySQL has created the new row
        });
    },
    update: function(pastaID, cb){
        console.log(pastaID);
        var queryString = "UPDATE pastaDishes SET devoured=true WHERE id=?";
        connection.query(queryString, [pastaID], function(err, result){
            if (err) throw err;
            cb(result); //again, this will let us know when mySQL has updated the pastaName selected
        });
    }
};



module.exports = orm;