// menu 2
// Tomato Soup

let halftEl = document.getElementById("halft")
let fulltEl = document.getElementById("fullt")
let disstEl = document.getElementById("disst")
halftEl.addEventListener("click", function () {
    console.log("cliked is working")
    disstEl.textContent = "Half Tomato Soup Selected"
})
fulltEl.addEventListener("click", function () {
    console.log("cliked is working")
    disstEl.textContent = "Full Tomato Soup Selected"
})
// Greek Salad
let halfgEl = document.getElementById("halfg")
let fullgEl = document.getElementById("fullg")
let dissgEl = document.getElementById("dissg")
halfgEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissgEl.textContent = "Half Greek Salad Selected"
})
fullgEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissgEl.textContent = "Full Greek Salad Selected"
})
// Beetroot Salad

let halfbEl = document.getElementById("halfb")
let fullbEl = document.getElementById("fullb")
let dissbEl = document.getElementById("dissb")
halfbEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissbEl.textContent = "Half Beetroot Salad Selected"
})
fullbEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissbEl.textContent = "Full Beetroot Salad Selected"
})
// Vegetable Salad
let halfvsEl = document.getElementById("halfvs")
let fullvsEl = document.getElementById("fullvs")
let dissvsEl = document.getElementById("dissvs")
halfvsEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissvsEl.textContent = "Half Vegetable Salad Selected"
})
fullvsEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissvsEl.textContent = "Vegetable Salad Selected"
})

let placeorder2El = document.getElementById("placeorder2")
let odis2El = document.getElementById("odis2")
placeorder2El.addEventListener("click", function () {
    if (disstEl.textContent === "" && dissgEl.textContent === "" && dissbEl.textContent === "" && dissvsEl.textContent === "") {
        alert("please select at lest one item")
        odis2El.textContent = "please select at lest one item"
    }
    else {
        alert("Order Place Successfully 😄")
        odis2El.textContent = "Order Place Successfully 😄"

    }
})

let clr2El = document.getElementById("clr2")

clr2El.addEventListener("click", function () {
    console.log("click ho rha hai")
    disstEl.textContent = ""
    dissgEl.textContent = ""
    dissbEl.textContent = ""
    dissvsEl.textContent = ""
    odis2El.textContent = ""

})