const express = require('express');
const Users = require('../Models/users');
//Here, we are using Router from Express, and we are exporting it too using module.exports.
const router = express.Router()
// Now, let's write our endpoints here in this routes file. We will have five routes for the following actions:
// Posting data to Database.
// Getting all the data from the Database.
// Getting data based on the ID.
// Updating data based on the ID.
// Deleting data based on the ID.
// So, let's create the routes for these actions:

//Post Method
router.post('/registerUser', async (req, res) => {
    // Our name and age is accepting the name and age from req body. We get this data from the client app such as Postman, or any frontend client like React or Angular.
    const userData = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        age: req.body.age
    });
    try {
        // In the try block, we are saving the data using data.save(). Then, we are storing the data in a const called dataToSave.

        // We are also sending the success message with the data in the response body.

        // And in the catch block, we are receiving any errors if we get any.
        const dataToSave = await userData.save();
        res.status(200).json(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAllUsers', async (req, res) => {
    try {
        // Here, we are using the Model.
        // find method to fetch all the data from the database. 
        // Then, we are returning it back in JSON format. 
        // If we have an error, we will get that too.
        const data = await Users.find();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getloggedInUser/:id', async (req, res) => {
    try {
        const data = await Users.findById(req.params.id);
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/updateUser/:id', async (req, res) => {
    try {
        //Here we have three parameters that we are passing in the findByIdAndUpdate method, which we use to find a document by ID and update it.

        // The req.params.id is the const id, updatedData which contains the req.body, and the options, which specifies whether to return the updated data in the body or not.
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.status(200).send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.status(200).send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router;