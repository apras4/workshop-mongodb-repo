// This is the server code
const express = require('express'); // everything that follows "app.___" is from express

const MovieReview = require('./schema/MovieReview');
const cors = require('cors'); // to securely connect the frontend and the backend, include this
const mongoose = require('mongoose');
require('dotenv').config(); // important! this loads the keys in your .env file while running your server.
                            // This is because you should never put hard code these keys, their secret!

const app = express(); // app is now the instance of your server
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// connecting to MongoDB
// set MONGODB_URI in your .env file
mongoose.connect(process.env.MONGODB_URI) // this is an asynchronous operation task
    .then((result) => {                   // it first waits to connec to MongoDB, and if so, starts the server on PORT 3000
        app.listen(3000);
        console.log('Server is running on port 3000, connected to MongoDB');
    })
    .catch(err => console.error('MongoDB connection error:', err)); // if there was an error connecting, this runs


// ------ Routes -----------

// posting or creating a new review in the db

// let's try a hard coded document and see if this shows up on the DB

// app.get('/api/create-review', async (req, res) => {
//     try {
//         const newReview = new MovieReview({
//             title: "Lalaland",
//             description: "movie was good",
//             rating: 5
//         });

//         const savedReview = await newReview.save();
//         res.status(201).json(savedReview);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });


// now let's create the API route that's general
// this one posts the body, containing {title, desc, and rating} coming from our form

// app.post('/api/reviews', async (req, res) => {
//     try {
//         console.log(req.body);
//         const newReview = new MovieReview(req.body); // the body should contain title, description, rating
//         const savedReview = await newReview.save();
//         res.status(201).json(savedReview);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// now let's write the API route for reading all reviews from the DB
