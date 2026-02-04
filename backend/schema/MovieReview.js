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
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// ----------
// set up the movie review schema 

const movieReviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0, // max rating is between 0 and 10
        max: 10
    }
}, { timestamps: true }); // timestamps will automatically be added when we create or update a review

// now we can use this schema to create a model

// what is a schema, what is a model, how are we going to use it in the workshop

// now that we have the model, we can export it and create routes!
const MovieReview = mongoose.model('Review', movieReviewSchema); // name is important, has to be singular and capitalized
module.exports = MovieReview;                                         // mongoose will pluralize it for the collection name --> so if you put the name as Review, the collection will be Reviews

// we use these routes to directly do things to the DB!

// set up routes for 1 operation - > create route .... maybe in the starter code include the read route


// now go back to server.js, we can use this route to create movie reviews in the db!

// lets create an API route!

// now lets see if it wroked! run the server and frontend and see if the submission shows up on atlas

// great! its there!!! now how do we fetch it??

// read route is preset ( or maybe I just explain the code ) or I write it ?

// ok lets hve the frontend read 
//  -> on hittting a refresh button, read is called and the stuff updates wtvr is on the db
//  -> orrr maybe on the submit button, read is called by a comp or smthng.. ? 

// with everything implemented, frontend now shows what on the db

// great, lets refresh and see if it persists!


// YAY!!!




