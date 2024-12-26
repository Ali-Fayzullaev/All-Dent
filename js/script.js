const nameCustomers = document.querySelectorAll(".name-customers");
const cardReviews = document.querySelectorAll(".card-reviews");



cardReviews.forEach((cardReview) => {
    cardReview.addEventListener("mouseover", () => {
        cardReviews.forEach((cardReview) => {
            cardReview.classList.add("text-success");
        })
    })
    cardReview.addEventListener("mouseleave", () => {
        cardReviews.forEach((cardReview) => {
            cardReview.classList.remove("text-success");
        })
    })
    
})



// Carousel
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});





