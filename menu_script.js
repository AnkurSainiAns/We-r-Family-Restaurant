let halfpEl = document.getElementById("halfp")
let fullpEl = document.getElementById("fullp")
let disspEl = document.getElementById("dissp")
halfpEl.addEventListener("click", function () {
    console.log("cliked is working")
    disspEl.textContent = "Half Paneer Tikka Selected"
})
fullpEl.addEventListener("click", function () {
    console.log("cliked is working")
    disspEl.textContent = "full Paneer Tikka Selected"
})
// milk
let halfmEl = document.getElementById("halfm")
let fullmEl = document.getElementById("fullm")
let dissmEl = document.getElementById("dissm")
halfmEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissmEl.textContent = "Half Glass Kesar Milk Selected"
})
fullmEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissmEl.textContent = "Full Glass Kesar Milk Selected"
})
// Crispy Corn Chaat
let halfcEl = document.getElementById("halfc")
let fullcEl = document.getElementById("fullc")
let disscEl = document.getElementById("dissc")
halfcEl.addEventListener("click", function () {
    console.log("cliked is working")
    disscEl.textContent = "Half Crispy Corn Chaat Selected"
})
fullcEl.addEventListener("click", function () {
    console.log("cliked is working")
    disscEl.textContent = "Full Crispy Corn Chaat Selected"
})
// Vegetable Spring Rolls
let halfvEl = document.getElementById("halfv")
let fullvEl = document.getElementById("fullv")
let dissvEl = document.getElementById("dissv")
halfvEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissvEl.textContent = "Half Vegetable Spring Rolls Selected"
})
fullvEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissvEl.textContent = "Full Vegetable Spring Rolls Selected"
})
let placeorder1El = document.getElementById("placeorder1")
let odis1El = document.getElementById("odis1")
placeorder1El.addEventListener("click", function () {
    if (disscEl.textContent === "" && dissmEl.textContent === "" && disspEl.textContent === "" && dissvEl.textContent === "") {
        alert("please select at lest one item")
        odis1El.textContent = "please select at lest one item"
    }
    else {
        alert("Order Place Successfully ")
        odis1El.textContent = "Order Place Successfully "

    }
})

let clr1El = document.getElementById("clr1")

clr1El.addEventListener("click", function () {
    console.log("click ho rha hai")
    disscEl.textContent = ""
    dissmEl.textContent = ""
    disspEl.textContent = ""
    dissvEl.textContent = ""
    odis1El.textContent = ""

})