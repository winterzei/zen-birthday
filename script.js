const intro = document.getElementById("intro");
const mainPage = document.getElementById("mainPage");

const openButton = document.getElementById("openButton");

const envelope = document.getElementById("envelope");
const bouquet = document.getElementById("bouquet");
const pictures = document.getElementById("pictures");

const letterModal = document.getElementById("letterModal");
const flowerModal = document.getElementById("flowerModal");
const galleryModal = document.getElementById("galleryModal");

const closeLetter = document.getElementById("closeLetter");
const closeFlower = document.getElementById("closeFlower");
const closeGallery = document.getElementById("closeGallery");


/* =========================
   OPEN MAIN WEBSITE
========================= */

openButton.addEventListener("click", () => {

    intro.classList.add("hide");

    document.body.style.overflow = "auto";

});


/* =========================
   ENVELOPE
========================= */

envelope.addEventListener("click", () => {

    letterModal.classList.add("show");

});


closeLetter.addEventListener("click", () => {

    letterModal.classList.remove("show");

});


/* =========================
   BOUQUET
========================= */

bouquet.addEventListener("click", () => {

    flowerModal.classList.add("show");

});


closeFlower.addEventListener("click", () => {

    flowerModal.classList.remove("show");

});


/* =========================
   PICTURES
========================= */

pictures.addEventListener("click", () => {

    galleryModal.classList.add("show");

});


closeGallery.addEventListener("click", () => {

    galleryModal.classList.remove("show");

});


/* =========================
   CLICK OUTSIDE MODAL
========================= */

window.addEventListener("click", (event) => {

    if (event.target === letterModal) {
        letterModal.classList.remove("show");
    }

    if (event.target === flowerModal) {
        flowerModal.classList.remove("show");
    }

    if (event.target === galleryModal) {
        galleryModal.classList.remove("show");
    }

});
