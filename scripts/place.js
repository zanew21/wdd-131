window.onload = function() {
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toLocaleDateString();
    var footerParagraph = document.getElementById("lastmodified");
    footerParagraph.textContent = "Last modified: " + formattedDate;
};

const temperature = 76;
const wind = 7;

document.getElementById("temp").innerText = temperature;
document.getElementById("wind").innerText = wind;

function calculateWindChill(T, V) {
    return 35.74 + (0.6215 * T) - (35.75 * Math.pow(V, 0.16)) + (0.4275 * T * Math.pow(V, 0.16));
}

const chill = calculateWindChill(temperature,wind);
document.getElementById("chill").innerText = chill.toFixed(2);


