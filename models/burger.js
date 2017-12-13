//BURGER MODEL: we're setting up a way to talk to our database more efficiently
var orm = require("../config/orm.js");

var pasta = {
    getPasta : function(cb){
        orm.getPasta(function(res){
            cb(res); //array of objects
        });
    },
    create : function(pastaName, cb){
        orm.create(pastaName, function(res){
            cb(res); //okay, done creating
        });
    },
    update : function(pastaID, cb){
        orm.update(pastaID, function(res){
            cb(res); //okay, done updating
        });
    }
};


module.exports = pasta;