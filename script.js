const reviewForm = document.getElementById('reviewForm');
const reviewsDiv = document.getElementById('reviews');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const userName = document.getElementById('userName').value;
  const userReview = document.getElementById('userReview').value;

  if (!userName || !userReview) {
    alert('Please fill in all fields.');
    return;
  }

  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  const reviewContent = `
    <h3>${userName}</h3>
    <p>${userReview}</p>
  `;

  reviewElement.innerHTML = reviewContent;
  reviewsDiv.appendChild(reviewElement);

  // Clear the form
  reviewForm.reset();
});
