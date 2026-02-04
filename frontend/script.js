const api_url = "http://localhost:3000"; // same as server port

async function createReview(review) {
    const response = await fetch(`${api_url}/api/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    
    if(!response.ok) {
        throw new Error('Failed to create a review');
    }   

    document.getElementById('movie-form').reset();
    fetchAndUpdateMovieCards();
}

// getReviews(); // calling this every time our page reloads


// ----------------
// handling updating movie review cards from the db

const movieCards = document.getElementsByClassName('movie-cards');

async function fetchAndUpdateMovieCards() {
    try {
        const response = await fetch(`${api_url}/api/reviews`);
        if(!response.ok) {
            throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();

        console.log(data);

        // update the DOM with the fetched reviews
        movieCards[0].innerHTML = ''; // clear existing cards

        // loop through data and create cards
        data.forEach(review => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
              <h3>${review.title}</h3>
              <p>Description: ${review.description}</p>
              <span class="rating">⭐ ${review.rating} / 10</span>
            `;

            movieCards[0].appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

document.getElementById('movie-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission behavior

    const formData = new FormData(this); // formdata object created
    console.log(formData.get('title'));
    const review = {
        title: formData.get('title'),
        description: formData.get('description'),
        rating: formData.get('rating')
    };

    createReview(review);
});

fetchAndUpdateMovieCards();