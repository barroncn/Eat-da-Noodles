var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    //if the JAWSDB is available use it (if viewing on Heroku)
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else{
    //otherwise use the local database
    connection = mysql.createConnection({
                                          host: "localhost",
                                          user: "root",
                                          password: "",
                                          database: "pasta_db"
                                        });
}
 
//connect to the database
connection.connect(function(err){
    if (err) return err;
    console.log("Connected to Noodles Database!");
});

module.exports = connection;