let hamburger = document.getElementById("hamburger")
let closeIcon = document.getElementById("close")
let dropdown = document.getElementById("dropdown")

hamburger.addEventListener("click", () => {
    console.log("why")
    hamburger.classList.add("invisible");
    closeIcon.classList.remove("invisible");
    closeIcon.classList.add("visible")
    dropdown.classList.remove("invisible");
})

closeIcon.addEventListener("click", () => {
    hamburger.classList.remove("invisible");
    closeIcon.classList.remove("visible")
    closeIcon.classList.add("invisible");
    dropdown.classList.add("invisible");
})