let bulb = document.getElementById("bulb");
let btn= document.getElementById("btn");

btn.addEventListener("click", () => {
    bulb.classList.toggle("glow");
});