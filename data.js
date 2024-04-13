function generateStarRating(rating) {
    const maxRating = 5; 
    const starRating = document.createElement("div");
    starRating.classList.add("star-rating");

    // Calculate the number of filled stars
    const filledStars = Math.floor(rating);
    
    // Check if there is a half-filled star
    const halfStar = rating % 1 !== 0;

    for (let i = 1; i <= maxRating; i++) {
        const starIcon = document.createElement("span");
        starIcon.classList.add("star");

        // If the current star is less than or equal to the filled stars, fill it with a star icon
        if (i <= filledStars) {
            starIcon.innerHTML = "&#9733;"; // Filled star icon
        } else if (halfStar && i === filledStars + 1) {
            starIcon.innerHTML = "&#9733;&#189;"; // Half-filled star icon
        } else {
            starIcon.innerHTML = "&#9734;"; // Empty star icon
        }

        starRating.appendChild(starIcon);
    }

    return starRating;
}
