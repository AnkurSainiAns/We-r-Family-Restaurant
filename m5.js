// Gulab Jamun
let qntaddgjEl = document.getElementById("qntaddgj")
let disgjEl = document.getElementById("disgj")
let quantitygj = 3
let pricegj = 25
qntaddgjEl.addEventListener("click", function () {
    quantitygj++
    let totalpricegj = quantitygj * pricegj
    disgjEl.textContent = `Quantity ${quantitygj}, Price ${totalpricegj}`
})

// Rasmalai
let qntaddrasEl = document.getElementById("qntaddras")
let disrasEl = document.getElementById("disras")
let quantityras = 1
let priceras = 40
qntaddrasEl.addEventListener("click", function () {
    quantityras++
    let totalpriceras = quantityras * priceras
    disrasEl.textContent = `Quantity ${quantityras}, Price ₹${totalpriceras}`
})

// Fruit Custard
let qntaddfcEl = document.getElementById("qntaddfc")
let disfcEl = document.getElementById("disfc")
let quantityfc = 1
let pricefc = 25
qntaddfcEl.addEventListener("click", function () {
    quantityfc++
    let totalpricefc = quantityfc * pricefc
    disfcEl.textContent = `Quantity ${quantityfc}, Price ₹${totalpricefc}`
})
// Matka Kulfi
let qntaddmkEl = document.getElementById("qntaddmk")
let dismkEl = document.getElementById("dismk")
let quantitymk = 0
let pricemk = 80
qntaddmkEl.addEventListener("click", function () {
    quantitymk++
    let totalpricemk = quantitymk * pricemk
    dismkEl.textContent = `Quantity ${quantitymk}, Price ₹${totalpricemk}`
})
// Chocolate Lava Cake
let qntaddclcEl = document.getElementById("qntaddclc")
let disclcEl = document.getElementById("disclc")
let quantityclc = 0
let priceclc = 190
qntaddclcEl.addEventListener("click", function () {
    quantityclc++
    let totalpriceclc = quantityclc * priceclc
    disclcEl.textContent = `Quantity ${quantityclc}, Price ₹${totalpriceclc}`
})

let placeorder5El = document.getElementById("placeorder5")
let odis5El = document.getElementById("odis5")
placeorder5El.addEventListener("click", function () {
    if (disgjEl.textContent === "" && disrasEl.textContent === "" && disfcEl.textContent === "" && dismkEl.textContent === "" && disclcEl.textContent === "") {
        alert("please select at lest one item")
        odis5El.textContent = "please select at lest one item"
    }
    else {
        alert("Order Place Successfully ")
        odis5El.textContent = "Order Place Successfully "

    }
})

let clr5El = document.getElementById("clr5")

clr5El.addEventListener("click", function () {
    console.log("click ho rha hai")
    disgjEl.textContent = ""
    quantitygj = 3
    pricegj = 25
    disrasEl.textContent = ""
    quantityras = 1
    priceras = 40
    disfcEl.textContent = ""
    quantityfc = 1
    pricefc = 25
    dismkEl.textContent = ""
    quantitymk = 0
    pricemk = 80
    disclcEl.textContent = ""
    quantityclc = 0
    priceclc = 190
    odis5El.textContent = ""

})

let clrgjEl = document.getElementById("clrgj")
clrgjEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    disgjEl.textContent = ""
    quantitygj = 3
    pricegj = 25
})

let clrrasEl = document.getElementById("clrras")
clrrasEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    disrasEl.textContent = ""
    quantityras = 1
    priceras = 40
})

let clrfcEl = document.getElementById("clrfc")
clrfcEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    disfcEl.textContent = ""
    quantityfc = 1
    pricefc = 25
})

let clrmkEl = document.getElementById("clrmk")
clrmkEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    dismkEl.textContent = ""
    quantitymk = 0
    pricemk = 80
})

let clrclcEl = document.getElementById("clrclc")
clrclcEl.addEventListener("click", function () {
    console.log("click ho rha hai")
    disclcEl.textContent = ""
    quantityclc = 0
    priceclc = 190
})
