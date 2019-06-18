/* ------ dr.dk-agtig box ------ */

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#mere").addEventListener("click", readMore);
}

function readMore() {
    console.log("readMore:");
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");
}

window.addEventListener("load", menuVirker);

function menuVirker() {
    console.log("menu virker");
    document.querySelector("#menuknapMobil").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menuMobil").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menuMobil").classList.contains("hidden");

    if (erSkjult == true) {
        document.getElementById("menuknapMobil").src = "svg/spaghetti-menu.svg";
    } else {
        document.getElementById("menuknapMobil").src = "svg/spaghetti-no.svg";
    }
}
