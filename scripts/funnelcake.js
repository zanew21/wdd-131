const funnelCakes = [
    {
        name: "Strawberry",
        imgSrc: "images/strawberry.webp"
    },
    {
        name: "Chocolate",
        imgSrc: "images/chocolate.webp"
    },
    {
        name: "Caramel",
        imgSrc: "images/caramel.webp"
    },
    {
        name: "Peaches",
        imgSrc: "images/peaches.webp"
    },
    {
        name: "Triple Berry",
        imgSrc: "images/tripleberry.webp"
    },
    {
        name: "Powdered",
        imgSrc: "images/powderedcake.webp"
    }
];

function createCard(funnelCake) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = funnelCake.imgSrc;
    img.alt = funnelCake.name;
    img.loading = 'lazy';

    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = funnelCake.name;

    card.appendChild(img);
    card.appendChild(title);

    return card;
}

function renderCards() {
    const container = document.getElementById('cakes');
    funnelCakes.forEach(funnelCake => {
        const card = createCard(funnelCake);
        container.appendChild(card);
    });
}

renderCards();

// bookus.html page localstorage

populateDropdown();

document.addEventListener("DOMContentLoaded", function() {
    // Check if localStorage supports and has a reviewCounter, initialize to 0 if not present
    if (!localStorage.getItem('submissionCounter')) {
        localStorage.setItem('submissionCounter', 0);
    }

    // Get the counter element
    const counterElement = document.getElementById('submissionCounter');

    // Increment the counter in localStorage
    localStorage.setItem('submissionCounter', parseInt(localStorage.getItem('submissionCounter')) + 1);

    // Display the updated counter value
    counterElement.textContent = localStorage.getItem('submissionCounter');
});