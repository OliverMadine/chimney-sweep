function addSLideUpAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up-animation");
    }
  });
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

let observer = new IntersectionObserver(addSLideUpAnimation, options);

document.querySelectorAll(".slide-up").forEach((elem) => observer.observe(elem));
