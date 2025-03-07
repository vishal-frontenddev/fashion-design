let nav = document.querySelector(".nav__links")
let hamb = document.querySelector(".menu-bar i")

num = 0

hamb.addEventListener("click", () => {
    if (num == 0) {
        nav.style.top = 0
        num = 1
        hamb.setAttribute("class", "fa-solid fa-xmark")
    }
    else {
        nav.style.top = "-100%"
        num = 0
        hamb.setAttribute("class", "fa-solid fa-bars")
    }
})


const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".hero-cont-sec-img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".hero-cont h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".hero-cont p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".hero-btns", {
    ...scrollRevealOption,
    delay: 1500,
});


// arrival 

ScrollReveal().reveal(".arrival-imgages", {
    ...scrollRevealOption,
    interval: 500,
  });
  

// sale

  ScrollReveal().reveal(".sale-image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".sale-cont h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".sale-cont p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".sale-cont h4", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".sale-btn", {
    ...scrollRevealOption,
    delay: 1500,
  });


// favourite
ScrollReveal().reveal(".favourite-images", {
    ...scrollRevealOption,
    interval: 500,
  });
  