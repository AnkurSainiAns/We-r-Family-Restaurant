// Masala Chai
let qntaddmcEl = document.getElementById("qntaddmc")
let dismcEl = document.getElementById("dismc")
let quantitymc = 0
let pricemc = 50
qntaddmcEl.addEventListener("click", function () {
    quantitymc++
    let totalpricemc = quantitymc * pricemc
    dismcEl.textContent = `quantity ${quantitymc}, price ₹${totalpricemc}`
})

// Filter Coffee
let qntaddfcEl = document.getElementById("qntaddfc")
let disfcEl = document.getElementById("disfc")
let quantityfc = 0
let pricefc = 150
qntaddfcEl.addEventListener("click", function () {
    quantityfc++
    let totalpricefc = quantityfc * pricefc
    disfcEl.textContent = `quantity ${quantityfc}, price ₹${totalpricefc}`
})

// Fresh Lime Soda
let qntaddflsEl = document.getElementById("qntaddfls")
let disflsEl = document.getElementById("disfls")
let quantityfls = 0
let pricefls = 70
qntaddflsEl.addEventListener("click", function () {
    quantityfls++
    let totalpricefls = quantityfls * pricefls
    disflsEl.textContent = `quantity ${quantityfls}, price ₹${totalpricefls}`
})

// Mojito Cooler
let qntaddmocEl = document.getElementById("qntaddmoc")
let dismocEl = document.getElementById("dismoc")
let quantitymoc = 0
let pricemoc = 170
qntaddmocEl.addEventListener("click", function () {
    quantitymoc++
    let totalpricemoc = quantitymoc * pricemoc
    dismocEl.textContent = `quantity ${quantitymoc}, price ₹ ${totalpricemoc}`
})


let placeorder6El = document.getElementById("placeorder6")
let odis6El = document.getElementById("odis6")
placeorder6El.addEventListener("click", function () {
    if (dismcEl.textContent === "" && disfcEl.textContent === "" && disflsEl.textContent === "" && dismocEl.textContent === "") {
        alert("please select at lest one item")
        odis6El.textContent = "please select at lest one item"
    }
    else {
        alert("Order Place Successfully ")
        odis6El.textContent = "Order Place Successfully "

    }
})

let clrmcEl = document.getElementById("clrmc")
clrmcEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    dismcEl.textContent = ""
    quantitymc = 0
    pricemc = 50
})

let clrfcEl = document.getElementById("clrfc")
clrfcEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    disfcEl.textContent = ""
    quantityfc = 0
    pricefc = 150
})

let clrflsEl = document.getElementById("clrfls")
clrflsEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    disflsEl.textContent = ""
    quantityfls = 0
    pricefls = 70
})

let clrmocEl = document.getElementById("clrmoc")
clrmocEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    dismocEl.textContent = ""
    quantitymoc = 0
    pricemoc = 170
})

let clr6El = document.getElementById("clr6")
clr6El.addEventListener("click", function () {
    console.log("click ho rha hai")
    odis6El.textContent = ""
    dismocEl.textContent = ""
    quantitymoc = 0
    pricemoc = 170
    disflsEl.textContent = ""
    quantityfls = 0
    pricefls = 70
    disfcEl.textContent = ""
    quantityfc = 0
    pricefc = 150
    dismcEl.textContent = ""
    quantitymc = 0
    pricemc = 50

})