const ham = document.querySelector(".burger");
const close = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");

ham.onclick = function() {
    sideBar.classList.remove("active")
}

close.onclick = function() {
    sideBar.classList.add("active")
}