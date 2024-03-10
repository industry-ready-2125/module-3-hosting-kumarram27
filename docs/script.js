// JavaScript code

// Movies data
let movies = [
  {
    name: "loki",
    des: "Loki is an American television series created by Michael Waldron for the streaming service Disney.",
    image: "./images/slider 1.PNG",
  },
  {
    name: "falcon and the winter soldier",
    des: "Falcon and the Winter Soldier is an American television series created for the streaming platform Disney+.",
    image: "./images/slider 2.PNG",
  },
  {
    name: "WandaVision",
    des: "WandaVision is an American television series created for the streaming service Disney+",
    image: "./images/slider 3.PNG",
  },
  {
    name: "Raya and the Last Dragon",
    des: "Raya and the Last Dragon is an animated Disney film released in 2021.",
    image: "./images/slider 4.PNG",
  },
  {
    name: "Luca",
    des: "Luca is a Disney-Pixar animated film released in 2021.",
    image: "./images/slider 5.PNG",
  },
];

// Television shows data
let television = [
  {
    name: "Avatar",
    des: "Avatar: The Way of Water is a 2022 American epic science fiction film co-produced and directed by James Cameron.",
    image: "./images/avatar.jpg",
  },
  {
    name: "Veerasimha Reddy",
    des: "Veera Simha Reddy is a 2023 Indian Telugu-language action drama film written and directed by Gopichand Malineni and produced by Mythri Movie Makers.",
    image: "./images/nbk.jpg",
  },
  {
    name: "12th Fail",
    des: "12th Fail is a 2023 Indian Hindi-language biographical drama film directed, produced and written by Vidhu Vinod Chopra.",
    image: "./images/12th.jpg",
  },
  {
    name: "Vikram",
    des: "Vikram is a 2022 Indian Tamil-language action thriller film directed by Lokesh Kanagaraj.",
    image: "./images/vikram.jpg",
  },
  {
    name: "Salaar",
    des: "Salaar: Part 1 – Ceasefire is a 2023 Indian Telugu-language epic action film written and directed by Prashanth Neel and produced by Vijay Kiragandur.",
    image: "./images/salaar.jpg",
  },
];

// Function to create carousel slides
function createCarousel(container, content) {
  let slideIndex = 0; // track the current slide
  const carousel = container.querySelector(".carousel");
  let sliders = [];

  const createSlide = () => {
    if (slideIndex >= content.length) {
      slideIndex = 0;
    }

    // create DOM Elements
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let contentElement = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    // attaching all elements
    imgElement.src = content[slideIndex].image;
    h1.textContent = content[slideIndex].name;
    p.textContent = content[slideIndex].des;

    // appending elements to their respective parent
    contentElement.appendChild(h1);
    contentElement.appendChild(p);
    slide.appendChild(contentElement);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting elements classnames
    slide.className = "slider";
    contentElement.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    // increment slide index for next iteration
    slideIndex++;

    sliders.push(slide);

    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };

  // create initial slides
  for (let i = 0; i < 3; i++) {
    createSlide();
  }

  // set interval for creating slides
  setInterval(() => {
    createSlide();
  }, 3000);
}

// Function to scroll the card container to the left
function scrollLeft(container) {
  container.scrollLeft -= container.clientWidth;
}

// Function to scroll the card container to the right
function scrollRight(container) {
  container.scrollLeft += container.clientWidth;
}

// JavaScript code for television carousel
document.addEventListener("DOMContentLoaded", function () {
  // Television carousel container
  const televisionCarousel = document.getElementById("television-carousel");
  // Check if televisionCarousel exists and has content
  if (televisionCarousel && television.length > 0) {
    createCarousel(televisionCarousel, television);
  } else {
    console.error(
      "No televisionCarousel element or no television shows to display."
    );
  }

  // Attach click event listeners to previous and next buttons for cards sliders
  let cardContainers = document.querySelectorAll(".card-container");
  let nxtBtns = document.querySelectorAll(".nxt-btn");

  nxtBtns.forEach((nxtBtn, index) => {
    nxtBtn.addEventListener("click", () => {
      scrollRight(cardContainers[index]);
    });
  });
});

// JavaScript code for movies carousel
document.addEventListener("DOMContentLoaded", function () {
  // Movies carousel container
  const moviesCarousel = document.getElementById("movie-carousel");
  // Check if moviesCarousel exists and has content
  if (moviesCarousel && movies.length > 0) {
    createCarousel(moviesCarousel, movies);
  } else {
    console.error("No moviesCarousel element or no movies to display.");
  }
});

nxtBtns.forEach((nxtBtn, index) => {
  nxtBtn.addEventListener("click", () => {
    scrollRight(cardContainers[index]);
  });
});
