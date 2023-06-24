const testimonials = document.querySelectorAll(".testimonial");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const contactForm = document.querySelector(".contact-form");
const form = document.querySelector("form");
contactForm.classList.add("show");
form.classList.add("show");

let currentSlide = 0;

function showTestimonial(slideIndex) {
  testimonials.forEach((testimonial, index) => {
    testimonial.classList.remove("active", "previous", "next");

    if (index === slideIndex) {
      testimonial.classList.add("active");
    } else if (
      index === slideIndex - 1 ||
      (slideIndex === 0 && index === testimonials.length - 1)
    ) {
      testimonial.classList.add("previous");
    } else if (
      index === slideIndex + 1 ||
      (slideIndex === testimonials.length - 1 && index === 0)
    ) {
      testimonial.classList.add("next");
    }
  });
}

leftArrow.addEventListener("click", () => {
  currentSlide =
    currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1;
  showTestimonial(currentSlide);
});

rightArrow.addEventListener("click", () => {
  currentSlide =
    currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1;
  showTestimonial(currentSlide);
});

showTestimonial(currentSlide);

function handleColorSchemeChange() {
  var colorScheme = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--darkreader-neutral-background")
    ? "dark"
    : "light";

  var logoElements = document.getElementsByClassName("logo");

  for (var i = 0; i < logoElements.length; i++) {
    var logoElement = logoElements[i];

    if (colorScheme === "dark") {
      logoElement.classList.add("dark-mode");
    } else {
      logoElement.classList.remove("dark-mode");
    }
  }
}

// Initial update of the logo images based on the current color scheme
handleColorSchemeChange();

// Listen for changes in the color scheme preference
window.addEventListener("DarkReaderToggle", handleColorSchemeChange);
