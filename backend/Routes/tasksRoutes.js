const express = require('express');
const Tasks = require('../Models/tasks');
const Users = require('../Models/users');
//Here, we are using Router from Express, and we are exporting it too using module.exports.
const taskrouter = express.Router()
// Now, let's write our endpoints here in this routes file. We will have five routes for the following actions:
// Posting data to Database.
// Getting all the data from the Database.
taskrouter.post('/createNewTask', async (req, res) => {
    // Our name and age is accepting the name and age from req body. We get this data from the client app such as Postman, or any frontend client like React or Angular.
    let taskData;
    if (req.body.taskStatus == "Completed") {
        taskData = new Tasks({
            title: req.body.title,
            assignTo: req.body.assignTo,
            taskStatus: req.body.taskStatus,
            discription: req.body.discription,
            createdBy: req.body.createdBy,
            createdAt: new Date(),
            completedAt: new Date()
        });
    } else {
        taskData = new Tasks({
            title: req.body.title,
            assignTo: req.body.assignTo,
            taskStatus: req.body.taskStatus,
            discription: req.body.discription,
            createdBy: req.body.createdBy,
            createdAt: new Date()
        });
    }
    try {
        // In the try block, we are saving the data using data.save(). Then, we are storing the data in a const called dataToSave.
        // We are also sending the success message with the data in the response body.
        // And in the catch block, we are receiving any errors if we get any.
        const dataToSave = await taskData.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
taskrouter.get('/getAllTasks', async (req, res) => {
    try {
        // Here, we are using the Model.
        // find method to fetch all the data from the database. 
        // Then, we are returning it back in JSON format. 
        // If we have an error, we will get that too.
        const data = await Tasks.find({});
        const tasksCount = await Tasks.find().count();
        res.status(200).json({ data, tasksCount });
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

taskrouter.get('/getAllUsers', async (req, res) => {
    try {
        const data = await Users.find({}, { name: 1 });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
taskrouter.post('/deleteTask', async (req, res) => {
    try {
        console.log(req.body.id);
        const data = await Tasks.deleteOne({ _id: req.body.id });
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
})

taskrouter.post('/updateTask', async (req, res) => {
    // Our name and age is accepting the name and age from req body. We get this data from the client app such as Postman, or any frontend client like React or Angular.
    let updateTask;
    let userToUpdate = req.body._id
    console.log(userToUpdate);
    if (req.body.taskStatus == "Completed") {
        updateTask = {
            title: req.body.title,
            assignTo: req.body.assignTo,
            taskStatus: req.body.taskStatus,
            discription: req.body.discription,
            changedBy: req.body.changedBy,
            completedAt: new Date()
        };
    } else {
        updateTask = {
            title: req.body.title,
            assignTo: req.body.assignTo,
            taskStatus: req.body.taskStatus,
            discription: req.body.discription,
            changedBy: req.body.changedBy,
        };
    }
    try {
        // In the try block, we are saving the data using data.save(). Then, we are storing the data in a const called dataToSave.
        // We are also sending the success message with the data in the response body.
        // And in the catch block, we are receiving any errors if we get any.
        const dataToUpdate = await Tasks.updateOne({ _id: userToUpdate }, updateTask);
        res.status(200).json(dataToUpdate);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = taskrouter;