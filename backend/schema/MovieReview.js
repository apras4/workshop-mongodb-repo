// Setting up MongoDB Atlas
// 1. Create an acc
// 2. Make a cluster
// 3. Add the admin - save the user name and password
// 4. Make sure to choose the Node.js driver
// 5. Copy connection string --- this is important!
// 6. Paste copied connection string into the .env file

const mongoose = require('mongoose'); // imports mongoose, we use this to create a new schema
const Schema = mongoose.Schema; 

// ----------
// set up the movie review schema 
// ---------

const movieReviewSchema = new Schema({
    // write your code for attribute here:
    
}, { timestamps: true }); // timestamps will automatically be added when we create or update a review

// now we can use this schema to create a model
const MovieReview = mongoose.model('review', movieReviewSchema);
module.exports = MovieReview;                                   



