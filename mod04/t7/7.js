const image = document.getElementById("target")
const trigger = document.getElementById("trigger")
trigger.addEventListener("mouseenter", () => {
    image.src = "img/picB.jpg"
})
trigger.addEventListener("mouseleave", () => {
    image.src = "img/picA.jpg"
})
