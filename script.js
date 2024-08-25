

var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")
var img4 = document.querySelector(".img4")
var img5 = document.querySelector(".img5")
var path = document.querySelector(".path")
var bigimg = document.querySelector(".bigimg")
var para = document.querySelector("p")
var h5 = document.querySelector("h5")
var container = document.querySelector(".container")
img1.addEventListener("mouseover", function () {
    bigimg.src = "bike1.webp"
    path.style.background = "white"
    container.style.backgroundColor = "silver"
    para.style.color = "black"
    h5.style.color = "black"
    section2.style.backgroundColor = "silver"
    services.style.color = "black"
    section3.style.backgroundColor = "silver"
})

img2.addEventListener("mouseover", function () {
    bigimg.src = "bike2.webp"
    path.style.background = "#e5e5e5"
    container.style.backgroundColor = "#f94449"
    para.style.color = "black"
    h5.style.color = "black"
    section2.style.backgroundColor = "#f94449"
    services.style.color = "black"
    section3.style.backgroundColor = "#f94449"
    section4.style.backgroundColor = "#f94449"
})

img3.addEventListener("mouseover", function () {
    bigimg.src = "bike3.webp"
    path.style.background = "white"
    container.style.backgroundColor = "#8080ff"
    para.style.color = "black"
    h5.style.color = "black"
    section2.style.backgroundColor = "#8080ff"
    services.style.color = "black"
    section3.style.backgroundColor = "#8080ff"
    section4.style.backgroundColor = "#8080ff"
})

img4.addEventListener("mouseover", function () {
    bigimg.src = "bike4.webp"
    path.style.background = "#e5e5e5"
    container.style.backgroundColor = "#ff7415"
    para.style.color = "black"
    h5.style.color = "black"
    section2.style.backgroundColor = "#ff7415"
    services.style.color = "black"
    section3.style.backgroundColor = "#ff7415"
    section4.style.backgroundColor = "#ff7415"
})

img5.addEventListener("mouseover", function () {
    bigimg.src = "bike5.webp"
    path.style.background = "white"
    container.style.backgroundColor = "#101010"
    para.style.color = "white"
    h5.style.color = "white"
    section2.style.backgroundColor = "#101010"
    services.style.color = "black"
    section3.style.backgroundColor = "#101010"
    section4.style.backgroundColor = "#101010"
    section4.style.color = "white"
})

var section2 = document.getElementById("section2")
var services = document.querySelector(".services")

var section3 = document.getElementById("section3")
var aboutimg = document.querySelector(".aboutimg")

aboutimg.addEventListener("mouseover",function(){
    aboutimg.src = "img.webp"
})

aboutimg.addEventListener("mouseout",function(){
    aboutimg.src = "aboutbike.webp"
})

var section4 = document.getElementById("section4")