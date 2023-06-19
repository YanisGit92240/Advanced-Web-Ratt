const mysql = require('mysql');
const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root',      
  password: '3asba1601',      
  database: 'tutorials'  
});

pool.getConnection((err, connection) => {
  if (err) throw err; // not connected!
  console.log('Connected to the database');

  // Use the connection
  connection.query('SELECT * FROM tutorials', (error, results, fields) => {
    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});

module.exports = pool;