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