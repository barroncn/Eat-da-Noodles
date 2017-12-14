//Generic Database Functions
//========================================================================================================================================

var connection = require("../config/connection.js");//require connection.js

var orm = {
    //if we want to get an array of all the entries in our database
    getAllOrdered: function(tableName, orderBy, cb){
        //Get all the entries from the "tableName" table and order them by the "orderBy" column
        var queryString = "SELECT * FROM ?? ORDER BY ??";
        connection.query(queryString, [tableName, orderBy], function(err, result){
            if(err) {return result.status(500).end();}
            cb(err, result); //result will be an array of data objects from the pastaDishes table
        });
    },
    //if we want to create a new entry in our database
    createOne: function(tableName, colName, valueName, cb){
        //Insert the valueName into the tableName table under the colName column
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, colName, valueName], function(err, result){
            if(err) {return result.status(500).end();}
            cb(err, result); //result is object from mySQL signaling successful completion of command
        });
    },
    //if we want to update an existing entry in our database
    updateOne: function(tableName, setCol, setVal, idCol, idVal, cb){
        //Update the "tableName" table, setting the column "setCol" = the value "setVal" 
        //where idCol (identifying column) = idVal (identifying value)
        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [tableName, setCol, setVal, idCol, idVal], function(err, result){
            if(err) {return result.status(500).end();}
            cb(err, result); //result is object from mySQL signaling successful completion of command
        });
    }
};

module.exports = orm; //export the orm object