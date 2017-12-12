var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "pasta_db"
});

-- Connect to the bamazon database
connection.connect(function(err) {
  if (err) throw err;
  
  console.log("\nConnected to the Pasta Database!\n");
  pastaApp();
});

function pastaApp(newPasta){
    connection.query("INSERT INTO pastaDishes SET ? TO ?",
    {
        pasta_name: newPasta;
    },
    function(err,res){
        if (err) throw err;
        console.log(newPasta + " has been added!");
    });
}