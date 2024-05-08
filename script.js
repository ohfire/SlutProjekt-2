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
