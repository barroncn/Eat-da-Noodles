var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else{
    connection = mysql.createConnection({
                                          host: "localhost",
                                          user: "root",
                                          password: "",
                                          database: "pasta_db"
                                        });
}
 

connection.connect(function(err){
    if (err) return err;
    console.log("Connected to Noodles Database!");
});

module.exports = connection;