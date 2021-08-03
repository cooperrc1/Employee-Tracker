const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employeeTracker'
    },
    console.log("You are now connected to the database!")
);
module.exports = db
