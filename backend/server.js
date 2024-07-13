const express = require('express')

const cors =require ('cors');
const mysql = require ('mysql');


const app = express();
app.use(cors());

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost', // or your MySQL server address
    user: 'root',
    password: 'mysql',
    database: 'agriculture'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});
app.get("/", (req, res) => {
   const sql = "SELECT * FROM farmers";
   db.query (sql,(err,data)=>{
        if (err) return app.json ("Error");
        return res.json(data);

   })
})


app.listen(8081,()=> {
    console.log("listening");
})