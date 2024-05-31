const funnelcake = [
    {
        funnelcakeName: "Strawberry"
    },
    {
        funnelcakeName: "Chocolate"
    },
    {
        funnelcakeName: "Caramel"
    },
    {
        funnelcakeName: "Peaches"
    },
    {
        funnelcakeName: "Triple Berry"
    }
]

createFunnelCard("cakes");

function createFunnelCard(funnelcakes) {
    document.querySelector("#cakes#").innerHTML = "";
    funnelcakes.forEach(cake)
}