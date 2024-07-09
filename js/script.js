const navButton = document.getElementById("navButton");
const sectionLinks = document.querySelectorAll("nav a");

navButton.addEventListener('click', toggleNav);

sectionLinks.forEach(sectionLink => {
    sectionLink.addEventListener('click', toggleNav);
});

function toggleNav() {
    const nav = document.getElementById("nav");
    const navClasses = ["max-h-screen", "overflow-visible", "visible", "opacity-100"];
    for (navClass of navClasses) {
        nav.classList.toggle(navClass);
    }
}

const themeButton = document.getElementById("themeButton");
const moveCircle = document.querySelector("#themeButton div");

function enableDarkMode() {
    localStorage.setItem('dark', "true");
    document.documentElement.classList.add("dark");
    moveCircle.classList.add("move");
}

function disabledarkMode() {
    localStorage.setItem('dark', "false");
    document.documentElement.classList.remove("dark");
    moveCircle.classList.remove("move");
}

document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem('dark') === "true" ? enableDarkMode() : disabledarkMode();
});

themeButton.addEventListener('click', () => {
    localStorage.getItem('dark') === "true" ? disabledarkMode() : enableDarkMode();
});