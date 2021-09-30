// JavaScript Document

var dePlaceholder

dePlaceholder = document.querySelector("placeholder");

dePlaceholder.addEventListener("click", )

function veranderTekst() {
    dePlaceholder.classList.add("anders")
}

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

