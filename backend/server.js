const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(cors());

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
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
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = "INSERT INTO farmers (FarmerID,FirstName ,LastName,Address,ContactNumber) VALUES(?, ?, ?, ?, ?)";
    const { FarmerID,FirstName ,LastName,Address,ContactNumber } = req.body;
    const values = [FarmerID,FirstName ,LastName,Address,ContactNumber];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
