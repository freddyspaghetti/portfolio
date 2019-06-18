/* ------ dr.dk-agtig box ------ */

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#mere").addEventListener("click", readMore)
}

function readMore() {
    console.log("readMore:");
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");
}
