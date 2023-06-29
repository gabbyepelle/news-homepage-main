const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNav");
const body = document.querySelector("body");
const close = document.querySelector(".close");

hamburger.addEventListener("click", ()=>{
    mobileNav.classList.toggle("openDrawer");
    mobileNav.classList.toggle("hidden");
    body.classList.toggle("darken");
})

close.addEventListener("click", ()=>{
    mobileNav.classList.toggle("openDrawer");
    mobileNav.classList.toggle("hidden");
    body.classList.toggle("darken");
})