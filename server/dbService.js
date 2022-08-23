const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');
const dotenv = require = require('dotenv')
dotenv.config();

// connecting mysql
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

Connection.Connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db ' + connection.state);
})