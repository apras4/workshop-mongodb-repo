const api_url = "http://localhost:3000"; // same as server port

async function createReview(review) {
    // ---------------------------------
    // const response = await fetch(`${api_url}/api/reviews`, { // we are sending a POST request telling the backend "hey! store this"
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(review)
    // });
    
    // if(!response.ok) { // status of 500 would trigger this error
    //     throw new Error('Failed to create a review');
    // }   
    // ---------------------------------

    document.getElementById('movie-form').reset(); // reset the form after submission
    fetchAndUpdateMovieCards();
}

// handling updating movie review cards

const movieCards = document.getElementsByClassName('movie-cards');

const reviewArray = []; // we will change this later

async function fetchAndUpdateMovieCards() {
    // ---------------------------------
    // try {
        // const response = await fetch(`${api_url}/api/reviews`); // fetch is a GET request we are sending to localhost/3000/api/reviews
        // if(!response.ok) {
        //     throw new Error('Failed to fetch reviews');
        // }

        // const data = await response.json();

        // console.log(data)

    // --------------------------------

        movieCards[0].innerHTML = ''; // clear existing cards

        // loop through data and create cards
        reviewArray.forEach(review => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
              <h3>${review.title}</h3>
              <p>Description: ${review.description}</p>
              <span class="rating">⭐ ${review.rating} / 10</span>
            `;

            movieCards[0].appendChild(card);
        });

    // --------------------------------
    // } catch (error) {
    //     console.error('Error fetching reviews:', error);
    // }
    // --------------------------------
}

document.getElementById('movie-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission behavior
    const formData = new FormData(this); // formdata object created
    
    const review = {
        title: formData.get('title'),
        description: formData.get('description'),
        rating: formData.get('rating')
    };

    reviewArray.push(review); // adding to array
    createReview(review);
});

fetchAndUpdateMovieCards(); // renders cards upon page load