const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i"); //here menu icon of navbar is imported

function data() {
    const firstn = document.getElementById("firstname");
    const lastn = document.getElementById("lastname");
    const date = document.getElementById("date");
    const person = document.getElementById("person");
    const occ = document.getElementById("occasion");
    alert("Hooray ! "+"Your Table Is Booked For "+firstn.value+" "+lastn.value+" On Date "+date.value+" For "+person.value+" Persons "+" \nHope To See You On Time !");
}

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line":"ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-3-line");
});

const scrollRevealOption = {
    distance:"50px",
    origin: "bottom",
    duration:1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".about__content > div", {
    ...scrollRevealOption,
    delay:1000,
});

