const nameCustomers = document.querySelectorAll(".name-customers");
const cardReviews = document.querySelectorAll(".card-reviews");

// coment

cardReviews.forEach((cardReview) => {
  cardReview.addEventListener("mouseover", () => {
    cardReviews.forEach((cardReview) => {
      cardReview.classList.add("text-success");
    });
  });
  cardReview.addEventListener("mouseleave", () => {
    cardReviews.forEach((cardReview) => {
      cardReview.classList.remove("text-success");
    });
  });
});

// Carousel
const slider = document.querySelector(".gallery");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

const scrollSpy = new bootstrap.ScrollSpy(
  document.getElementById("scrollContainer"),
  {
    target: "#navbarScroll",
    offset: 100, // значение зависит от вашего контента
  }
);

// modal imj

// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all images with the class 'img-thumbnail'
var images = document.getElementsByClassName("img-thumbnail");

// Loop through all images and add click event
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
