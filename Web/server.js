const express = require("express");

const app = express();

const PORT = 5000
app.use(express.json());


const tasks = [];
let nextId = 1;

const categories = ["work", "personal", "study"];

app.post("/api/task", (req, res)=> {
    const { title, category} = req.body

    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({
            error : "Title is required and cannot accept empty space"
        })
    }

    if (typeof category !== "string" || !categories.includes((category)) === "") {
        return res.status(400).json({
            error : "category must worked, personal, or study"
        })
    }

    const task = {
        id : nextId++,
        title : title.trim(),
        category : category,
        status : "pending"
    };
    tasks.push(task);
    res.status(201).json((task))
});

app.get("/api/tasks", (req, res) => {
    const {category} = req.query;

    if(!category) {
        return res.status(200).json(tasks);
    }
    const filterTasks = tasks.filter(task => task.category === category);
    
    res.status(200).json(filterTasks);
})

app.get("/", (req, res) => {
      res.send("Task Running Successfully");
    });
app.listen(PORT, () => {
    console.log(`Server Running Successfully on${PORT}`)
})