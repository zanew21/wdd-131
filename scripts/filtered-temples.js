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





const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2008, October, 23",
      area: 41010,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/4e47429c6ce95afa09578b5a4f791b4a09160a6d/full/1920%2C/0/default"
    },
    {
      templeName: "Meridian Idaho",
      location: "Meridian, Idaho",
      dedicated: "2017, November, 19",
      area: 67331,
      imageUrl: 
      "https://www.churchofjesuschrist.org/imgs/ec1f40da525e7e4406f1b0962041d03a45ca8868/full/1920%2C/0/default"
    },
    {
      templeName: "Boise Idaho",
      location: "Boise, Idaho",
      dedicated: "1984, May, 31",
      area: 35868,
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/7966d14e4b63698bddfbfbf57b6ed9dc1649fb5d/full/1600%2C/0/default"  
    }
  ];

  createTempleCard(templeCards);

function createTempleCard(filteredTemples) {
  document.querySelector("#templeCards").innerHTML = "";
  filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let location = document.createElement("p");
      let dedicated = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector("#templeCards").appendChild(card);
  })
}


  const olderLink = document.querySelector("#older");
const newerLink = document.querySelector("#newer");
const largerLink = document.querySelector("#larger");
const smallerLink = document.querySelector("#smaller");

olderLink.addEventListener("click", () => {
    let older = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
    createTempleCard(older);
});
newerLink.addEventListener("click", () => {
    let newer = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
    createTempleCard(newer);
});
largerLink.addEventListener("click", () => {
    let old = temples.filter(temple => temple.area > 90000);
    createTempleCard(old);
});
smallerLink.addEventListener("click", () => {
    let old = temples.filter(temple => temple.area < 10000);
    createTempleCard(old);
});

window.onload = function() {
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toLocaleDateString();
    var footerParagraph = document.getElementById("lastmodified");
    footerParagraph.textContent = "Last modified: " + formattedDate;
};