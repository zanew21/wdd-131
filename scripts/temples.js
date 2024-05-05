function adjustGrid() {
    const main = document.querySelector('main');
    const images = document.querySelectorAll('.image');

    const numColumns = Math.min(Math.floor(main.clientWidth / 200), 3);

    main.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
}


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('nav a');

    hamburger.addEventListener('click', function () {
        navLinks.forEach(link => {
            link.style.display = link.style.display === 'block' ? 'none' : 'block';
        });
    });
});

window.onload = function() {
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toLocaleDateString();
    var footerParagraph = document.getElementById("lastmodified");
    footerParagraph.textContent = "Last modified: " + formattedDate;
};