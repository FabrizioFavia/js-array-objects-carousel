let path = "./";
let slideContainer = document.getElementById("imgSlider");
let nextBtn = document.getElementById("buttonRight");
let backBtn = document.getElementById("buttonLeft");
let currentslide = 0;
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
let slideArray = [];

/* FUNZIONE PER AGGIUNGERE O RIMUOVERE LA CLASSE HIDDEN */
function classToggle() {
    slideArray.map((element, i) => {
        if (currentslide == i) {
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    });
}

/* CREARE GLI ELEMENTI NEL DOM TRAMITE FOREACH */
images.forEach(element => {
    let imgBox = document.createElement("div");
    imgBox.classList.add("imgBox");

    let image = document.createElement("img");
    image.src = `${path}${element.image}`;
    image.classList.add("image");

    let title = document.createElement("p");
    title.classList.add("imgTitle");
    title.append(element.title);

    let description = document.createElement("p");
    description.classList.add("imgDscrpt");
    description.append(element.text);

    if (element !== images[0]) {
        imgBox.classList.add("hidden");
    };

    imgBox.append(image, title, description);
    slideArray.push(imgBox);
    slideContainer.append(imgBox);
});

/* FUNZIONE PER SLIDE SUCCESSIVA */
nextBtn.addEventListener("click", function () {

    if (currentslide == slideArray.length - 1) {
        currentslide = 0;
    } else {
        currentslide += 1;
    }

    classToggle();
});


backBtn.addEventListener("click", function () {

    if (currentslide == 0) {
        currentslide = slideArray.length - 1;
    } else {
        currentslide -= 1;
    }
    classToggle();

});


