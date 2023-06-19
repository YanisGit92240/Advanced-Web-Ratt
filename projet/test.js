const db = require('./db-config'); // replace with the path to your db-config file

db.query('SELECT 1', (err, results) => {
  if (err) throw err;
  console.log('Database connection successfully tested');
});
