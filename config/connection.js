var mysql = require('mysql');

require("dotenv").config();
var connection;

if (process.env.port) {
    connection = mysql.createConnection(process.env.port);
} else {
    connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'Tew890!',
    database: 'burgers_db'
});
};

connection.connect(function(err){
    if(err)throw err;
    console.log("Connected: "+connection.threadId);
});

module.exports = connection;