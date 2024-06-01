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
