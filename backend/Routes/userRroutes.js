const express = require('express');
const Users = require('../Models/users');
//Here, we are using Router from Express, and we are exporting it too using module.exports.
const router = express.Router()
// Now, let's write our endpoints here in this routes file. We will have five routes for the following actions:
// Posting data to Database.
// Getting all the data from the Database.
router.post('/registerUser', async (req, res) => {
    // Our name and age is accepting the name and age from req body. We get this data from the client app such as Postman, or any frontend client like React or Angular.
    const userData = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        age: req.body.age,
        createdAt:new Date()
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

router.post('/getUserById', async (req, res) => {
    try {
       const data = await Users.findById({_id:req.body.id});
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Get by ID Method
router.post('/getloggedInUser', async (req, res) => {
    try {
         const user = await Users.findOne({ "$and": [ { email: req.body.email }, { password: req.body.password} ] });
        if (!user) {
            console.log('USER DOES NOT EXIST');
        }
        res.status(200).json(user)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;