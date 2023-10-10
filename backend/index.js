require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/routes');
const cors = require('cors');
const mongoString = process.env.DATABASE_URL;

const app = express();
app.use(cors());

const PORT = 3000;

//Here, this app.use takes two things. One is the base endpoint, and the other is the contents of the routes. Now, all our endpoints will start from '/api'.
app.use(express.json());

app.use('/api', routes);

app.listen(PORT, async (error) => {
    if (!error) {
        console.log("Server is Successfully Running,and App is listening on port " + PORT)
        try {
            await mongoose.connect(mongoString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("connected to moongo");
        } catch (error) {
            console.log(error);
        }
    }
    else {
        console.log("Error occurred, server can't start", error);
    }
}
);
