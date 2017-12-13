var mysql = require("mysql");

var connection = mysql.createConnection({
    //port: process.env.PORT || 8081, //Do I need this? in mvc example they used two diff ports for server.js and connection.js??
    host: "localhost",
    user: "root",
    password: "",
    database: "pasta_db"
});

connection.connect(function(err){
    if (err) return err;
    console.log("Connected to Noodles Database!");
});

module.exports = connection;