import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb://127.0.0.1:27017';
mongoose.connect(url + "/ListApp");


const taskSchema = new mongoose.Schema({
    task: String
})

const taskDye = mongoose.model("task", taskSchema);


var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



app.get("/", async (req, res) => {
    
    const tasks = await taskDye.find({});
    const taskList = tasks.map(task => task.task);
    
    const d = new Date();
    const data = {
        year: d.getFullYear(),
        day: d.getDate(),
        month: monthName[d.getMonth()],
        itemsList: taskList,
    };

    res.render('index.ejs', data);
});
app.post("/add", async (req, res) => {
    const newTask = taskDye({
        task: req.body.addText
    })
    await newTask.save();
    const tasks = await taskDye.find({});
    const taskList = tasks.map(task => task.task);
    
    console.log(taskList);
    res.redirect("/");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});