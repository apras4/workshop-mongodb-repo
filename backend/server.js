// This is the server code
const express = require('express');
const MovieReview = require('./schema/MovieReview');

const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


// connecting to MongoDB
// set MONGODB_URI in your .env file

// SET UP AUTO LOAD!!!!

// delete smhtng form db
// add smhtng to db
// get smhtng from db
// update smhtng in db

mongoose.connect(process.env.MONGODB_URI) // this is an asynchronous operation task
    .then((result) => {
        app.listen(3000);
        console.log('Server is running on port 3000, connected to MongoDB');
    }) // once the above line finishes, this runs
    .catch(err => console.error('MongoDB connection error:', err)); // if there was an error connecting, this runs


// routes here

// posting or creating a new review in the db
app.post('/api/reviews', async (req, res) => {
    try {
        console.log(req.body);
        // const newReview = new MovieReview({
        //     title: "Lalaland",
        //     description: "i liked it",
        //     rating: 3.5
        // });
        const newReview = new MovieReview(req.body); // the body should contain title, description, rating
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// getting or reading all reviews from the db
app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await MovieReview.find({});
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});





// show the frontend as is, show functionality, explain how it doesnt remember data on refresh

// set up cluster, aka database

// API routes for CRUD operations -> how its going to help us w connecting to the db

// put smthng into db, we have to do this by creating modesla nd schema
    // This movie review app will have movie reviews -> eahc thing has
        // title
        // desc
        // rating

        // title - string
        // dsec - string
        // rating - double

// model for the database -> show how to set up a schema

