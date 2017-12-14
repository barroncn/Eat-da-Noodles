//Generic functions
var connection = require("../config/connection.js");//require connection.js

var orm = {
    //if we want to get an array of all the entries in our database
    getAllOrdered: function(tableName, orderBy, cb){
        //Get all the entries in the pastaDishes table and order them by their timestamp
        //ordering by date(timestamp) lets the the ready to eat and finished off lists display 
        //in the order that they are created. If an item gets updated the timestamp will update so the 
        //"Finished Off" list will display in the order the items are devoured
        var queryString = "SELECT * FROM ?? ORDER BY ??";
        connection.query(queryString, [tableName, orderBy], function(err, result){
            if(err) {return result.status(500).end();}
            cb(err, result); //result will be an array of data objects from the pastaDishes table
        });
    },
    //if we want to create a new entry in our database
    createOne: function(tableName, colName, valueName, cb){
        //Insert the entered pasta into the pastaDishes table (ID will be set automatically, devoured defaults to true, date timestamp
        //will be set upon creation and update if the entry is modified)
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, valueName], function(err, result){
            if(err) {return result.status(500).end();}
            console.log(result);
            cb(err, result); //result is object from mySQL signaling successful completion of command
        });
    },
    //if we want to update an existing entry in our database
    updateOne: function(tableName, setCol, setVal, idCol, idVal, cb){
        //Update the pasta in the pastaDishes table with id=pastaID, set devoured to true
        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [tableName, setCol, setVal, idCol, idVal], function(err, result){
            if(err) {return result.status(500).end();}
            cb(err, result); //result is object from mySQL signaling successful completion of command
        });
    }
};

module.exports = orm;