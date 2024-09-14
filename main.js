document.addEventListener("DOMContentLoaded", () => {
  const heroSlides = document.querySelectorAll(".hero-slide");
  let currentHeroSlide = 0;

  // Function to show the current hero slide
  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  // Function to move to the next hero slide
  function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
  }

  // Initial display of the first hero slide
  showHeroSlide(currentHeroSlide);

  // Set interval to change hero slides every 5 seconds
  setInterval(nextHeroSlide, 5000);
});
// Optional JavaScript to prevent default image behavior if needed
document.querySelectorAll(".portfolio-img").forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents default click behavior
    // Add any custom logic if required when images are clicked
  });
});
// JavaScript for Lightbox Functionality
document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  document.body.appendChild(lightbox);

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img").cloneNode();
      lightbox.style.display = "flex";
      lightbox.innerHTML = "";
      lightbox.appendChild(img);
      document.body.style.overflow = "hidden"; // Prevents body scroll
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = ""; // Re-enable body scroll
  });
});
