//Paneer Butter Masala 
let halfpbmEl = document.getElementById("halfpbm")
let fullpbmEl = document.getElementById("fullpbm")
let disspbmEl = document.getElementById("disspbm")
halfpbmEl.addEventListener("click", function () {
    console.log("cliked is working")
    disspbmEl.textContent = "Half Paneer Butter Masala Selected"
})
fullpbmEl.addEventListener("click", function () {
    console.log("cliked is working")
    disspbmEl.textContent = "Full Paneer Butter Masala Selected"
})
// Dal Tadka
let halfdtEl = document.getElementById("halfdt")
let fulldtEl = document.getElementById("fulldt")
let dissdtEl = document.getElementById("dissdt")
halfdtEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissdtEl.textContent = "Half Dal Tadka Selected"
})
fulldtEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissdtEl.textContent = "Full Dal Tadka Selected"
})
// Chole Bhature
let halfcbEl = document.getElementById("halfcb")
let fullcbEl = document.getElementById("fullcb")
let disscbEl = document.getElementById("disscb")
halfcbEl.addEventListener("click", function () {
    console.log("cliked is working")
    disscbEl.textContent = "Half Chole Bhature Selected"
})
fullcbEl.addEventListener("click", function () {
    console.log("cliked is working")
    disscbEl.textContent = "Full Chole Bhature Selected"
})
// Vegetable Kofta Curry
let halfvkcEl = document.getElementById("halfvkc")
let fullvkcEl = document.getElementById("fullvkc")
let dissvkcEl = document.getElementById("dissvkc")
halfvkcEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissvkcEl.textContent = "Half Vegetable Kofta Curry Selected"
})
fullvkcEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissvkcEl.textContent = "Full Vegetable Kofta Curry Selected"
})
//Stuffed Capsicum
let halfscEl = document.getElementById("halfsc")
let fullscEl = document.getElementById("fullsc")
let dissscEl = document.getElementById("disssc")
halfscEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissscEl.textContent = "Half Stuffed Capsicum Selected"
})
fullscEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissscEl.textContent = "Full Stuffed Capsicum Selected"
})

// Veg Jaipuri
let halfvjEl = document.getElementById("halfvj")
let fullvjEl = document.getElementById("fullvj")
let dissvjEl = document.getElementById("dissvj")
halfvjEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissvjEl.textContent = "Half Veg Jaipuri Selected"
})
fullvjEl.addEventListener("click", function () {
    console.log("cliked is working")
    dissvjEl.textContent = "Full Veg Jaipuri Selected"
})

let placeorder3El = document.getElementById("placeorder3")
let odis3El = document.getElementById("odis3")
placeorder3El.addEventListener("click", function () {
    if (disspbmEl.textContent === "" && dissdtEl.textContent === "" && disscbEl.textContent === "" && dissvkcEl.textContent === "" && dissscEl.textContent === "" && dissvjEl.textContent === "") {
        alert("please select at lest one item")
        odis3El.textContent = "please select at lest one item"
    }
    else {
        alert("Order Place Successfully ")
        odis3El.textContent = "Order Place Successfully "

    }
})

let clr3El = document.getElementById("clr3")

clr3El.addEventListener("click", function () {
    console.log("click ho rha hai")
    disspbmEl.textContent = ""
    dissdtEl.textContent = ""
    disscbEl.textContent = ""
    dissvkcEl.textContent = ""
    dissscEl.textContent = ""
    dissvjEl.textContent = ""
    odis3El.textContent = ""

})