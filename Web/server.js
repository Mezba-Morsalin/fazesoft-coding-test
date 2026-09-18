const express = require("express");

const app = express();

const PORT = 5000
app.use(express.json());


const task = []
let nextId = 1;

const categories = ["work", "personal", "study"];

app.post("/api/task")

app.get("/", (req, res) => {
      res.send("Task Running Successfully");
    });
app.listen(PORT, () => {
    console.log(`Server Running Successfully on${PORT}`)
})