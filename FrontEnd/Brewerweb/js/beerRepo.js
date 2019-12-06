//TODO Parse json to create array from another file
let DATA = [{
        name: 'Anchor Steam',
        ABV: 4.9,
        calories: 153,
        URL: 'https://i.imgur.com/tDwQmku.png'
    },
    {
        name: 'Becks Light',
        ABV: 2.3,
        calories: 64,
        URL: 'https://i.imgur.com/E7E3vae.png'
    },
    {
        name: 'Becks',
        ABV: 5.0,
        calories: 143,
        URL: 'https://i.imgur.com/w36IiTs.png'
    },
    {
        name: 'Blue Moon Belgian White',
        ABV: 5.4,
        calories: 168,
        URL: 'https://i.imgur.com/TtpiMjS.png'
    },
    {
        name: 'Budweiser',
        ABV: 5.0,
        calories: 145,
        URL: 'https://i.imgur.com/a6eauNg.png'
    },
    {
        name: 'Bud Light',
        ABV: 4.2,
        calories: 110,
        URL: 'https://i.imgur.com/hCQ5MHz.png'
    },
    {
        name: 'Busch',
        ABV: 4.3,
        calories: 114,
        URL: 'https://i.imgur.com/aTrnBwR.png'
    },
    {
        name: 'Coors Original',
        ABV: 5.0,
        calories: 148,
        URL: 'https://i.imgur.com/BKtgNHr.png'
    },
    {
        name: 'Coors Light',
        ABV: 4.2,
        calories: 102,
        URL: 'https://i.imgur.com/LrfUGPG.png'
    },
    {
        name: 'Corona Light',
        ABV: 4.1,
        calories: 99,
        URL: 'https://i.imgur.com/aRLkHzI.png'
    },
    {
        name: 'Firestone Walker 805',
        ABV: 4.7,
        calories: 141,
        URL: 'https://i.imgur.com/cdKPdUd.png'
    },
    {
        name: 'Heineken',
        ABV: 5.4,
        calories: 166,
        URL: 'https://i.imgur.com/BPBjexu.png'
    },
    {
        name: 'Heineken Light',
        ABV: 3.5,
        calories: 99,
        URL: 'https://i.imgur.com/IrAfJ0m.png'
    },
    {
        name: 'Keystone Light',
        ABV: 4.2,
        calories: 100,
        URL: 'https://i.imgur.com/KmFaBYY.png'
    },
    {
        name: 'Michelob Original Lager',
        ABV: 5.0,
        calories: 155,
        URL: 'https://i.imgur.com/4i3bFxX.png'
    },
    {
        name: 'Michelob Light',
        ABV: 4.3,
        calories: 113,
        URL: 'https://i.imgur.com/N7DR9mT.png'
    },
    {
        name: 'Michelob Ultra',
        ABV: 4.2,
        calories: 95,
        URL: 'https://i.imgur.com/vT1ViEY.png'
    },
    {
        name: 'Miller Genuine Draft',
        ABV: 5.0,
        calories: 143,
        URL: 'https://i.imgur.com/5M8KOqw.png'
    },
    {
        name: 'Miller High Life',
        ABV: 5.5,
        calories: 156,
        URL: 'https://i.imgur.com/42rV3tX.png'
    },
    {
        name: 'Miller Lite',
        ABV: 4.2,
        calories: 96,
        URL: 'https://i.imgur.com/47CEyuc.png'
    },
    {
        name: 'Pilsner Urquell',
        ABV: 4.3,
        calories: 156,
        URL: 'https://i.imgur.com/TTFW6JG.png'
    },
    {
        name: 'Sam Adams Golden Pilsner',
        ABV: 4.6,
        calories: 145,
        URL: 'https://i.imgur.com/PoD1Oxd.png'
    },
    {
        name: 'Sam Adams IPA',
        ABV: 5.9,
        calories: 175,
        URL: 'https://i.imgur.com/CwUoWmv.png'
    },
    {
        name: 'Sam Adams Light',
        ABV: 4.1,
        calories: 124,
        URL: 'https://i.imgur.com/4RvrFVs.png'
    },
    {
        name: 'Sapporo',
        ABV: 4.9,
        calories: 140,
        URL: 'https://i.imgur.com/OjseCIh.png'
    },
    {
        name: 'Sierra Nevada Pale Ale',
        ABV: 5.6,
        calories: 175,
        URL: 'https://i.imgur.com/gBJX5dR.png'
    },
    {
        name: 'St. Pauli Girl',
        ABV: 4.9,
        calories: 148,
        URL: 'https://i.imgur.com/goA4ODD.png'
    },
];


function BeersToList(item, index) {
    'use strict';
    var list = document.getElementById("beersList");
    var liElement = document.createElement("H2");
    var imgcomponet = document.createElement("img");
    var paragraph = document.createElement("p")
    var text = document.createTextNode(item.name);
    imgcomponet.src = item.URL;
    imgcomponet.id = "foo" + index;
    paragraph.appendChild(text);
    liElement.appendChild(paragraph)
    liElement.appendChild(imgcomponet);
    liElement.style.textAlign = "center";
    list.appendChild(liElement);

}
window.onload(DATA.forEach(BeersToList))