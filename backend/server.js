const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8081;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pes",
});

app.post("/dashboard", (req, res) => {
  const updateData =
    "UPDATE dht11 SET temperature = ?, humidity = ? WHERE id = ?";

  console.log("Received data:", req.body);

  const { temperature, humidity } = req.body;
  db.query(updateData, [temperature, humidity, 1], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error Updating data");
    } else {
      res.send("Data updated successfully");
    }
  });
});

app.get("/", (req, res) => {
  console.log("Received GET request on root");
  return res.json("Hello there From Backend");
});

app.get("/dashboard", (req, res) => {
  const getData = "SELECT * FROM dht11";
  db.query(getData, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      console.log(data);
      return res.json(data);
    }
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port: ${port}`);
});
