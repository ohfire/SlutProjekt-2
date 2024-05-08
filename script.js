// Visa/hide "Till toppen" knapp baserat på scrollposition
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const topButton = document.getElementById("topBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Scrolla till toppen när knappen klickas
function scrollToTop() {
    document.body.scrollTop = 0; // För Safari
    document.documentElement.scrollTop = 0; // För Chrome, Firefox, IE och Opera
}

// Visa/Hide hamburgermeny
document.getElementById("hamburger-menu").onclick = function() {
    const menu = document.getElementById("global-menu");
    menu.classList.toggle("show");
}

// Visa/hide "Till toppen" knapp baserat på scrollposition
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const topButton = document.getElementById("topBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Scrolla till toppen när knappen klickas
function scrollToTop() {
    document.body.scrollTop = 0; // För Safari
    document.documentElement.scrollTop = 0; // För Chrome, Firefox, IE och Opera
}

// Visa/Hide hamburgermeny
document.getElementById("hamburger-menu").onclick = function() {
    const menu = document.getElementById("global-menu");
    menu.classList.toggle("show");
}

// Modal Video Popup
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const openBtn = document.getElementById("openVideo");
const closeBtn = document.getElementsByClassName("close")[0];

openBtn.onclick = function() {
    modal.style.display = "block";
    modalVideo.play();
}

closeBtn.onclick = function() {
    modal.style.display = "none";
    modalVideo.pause();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalVideo.pause();
    }
}
