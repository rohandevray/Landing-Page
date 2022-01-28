const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const xmen = document.querySelector(".textbox");
  burger.addEventListener("click", () => {
    //here we add toggle rather than add to in and out with same button
    nav.classList.toggle("nav-active");
    //to make evrything off
    xmen.classList.toggle("invisible");
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = " ";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //burger ANimation
    burger.classList.toggle("toggle");
  });
};

navSlide();
