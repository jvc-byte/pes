const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//Running on port
const port = 8081

// Establish Connection to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "coaching_site"
});

const app = express();
app.use(cors())

app.get("/", (req, res) => {
    return res.json("Hello there From Backend");
})

app.get("/users", (req, res) => {
    const getUsers = "SELECT * FROM user";
    db.query(getUsers, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});