const express = require('express')
const cors = require('cors')

const mysql = require('mysql2')

const app = express()

app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234',
    database: 'smartfarm'
  });


app.get('/john',(req,res)=>{
    connection.query(
        'SELECT * FROM `john`',
        function(err, results, fields) {
          res.json(results);
          }
      );
    
})

app.listen(3333,()=>{
    console.log("start");
    
})
