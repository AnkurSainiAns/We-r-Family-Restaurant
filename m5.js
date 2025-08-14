// Gulab Jamun
let qntaddgjEl = document.getElementById("qntaddgj")
let disgjEl = document.getElementById("disgj")
let quantitygj = 3
let pricegj = 25
qntaddgjEl.addEventListener("click", function () {
    quantitygj++
    let totalpricegj = quantitygj * pricegj
    disgjEl.textContent = `quantity - ${quantitygj} , price = ₹
 ${totalpricegj}`
})

// Rasmalai
let qntaddrasEl = document.getElementById("qntaddras")
let disrasEl = document.getElementById("disras")
let quantityras = 1
let priceras = 40
qntaddrasEl.addEventListener("click", function () {
    quantityras++
    let totalpriceras = quantityras * priceras
    disrasEl.textContent = `quantity - ${quantityras} , price = ₹
 ${totalpriceras}`
})

// Fruit Custard
let qntaddfcEl = document.getElementById("qntaddfc")
let disfcEl = document.getElementById("disfc")
let quantityfc = 1
let pricefc = 25
qntaddfcEl.addEventListener("click", function () {
    quantityfc++
    let totalpricefc = quantityfc * pricefc
    disfcEl.textContent = `quantity - ${quantityfc} , price = ₹
 ${totalpricefc}`
})
// Matka Kulfi
let qntaddmkEl = document.getElementById("qntaddmk")
let dismkEl = document.getElementById("dismk")
let quantitymk = 0
let pricemk = 80
qntaddmkEl.addEventListener("click", function () {
    quantitymk++
    let totalpricemk = quantitymk * pricemk
    dismkEl.textContent = `quantity - ${quantitymk} , price = ₹
 ${totalpricemk}`
})
// Chocolate Lava Cake
let qntaddclcEl = document.getElementById("qntaddclc")
let disclcEl = document.getElementById("disclc")
let quantityclc = 0
let priceclc = 190
qntaddclcEl.addEventListener("click", function () {
    quantityclc++
    let totalpriceclc = quantityclc * priceclc
    disclcEl.textContent = `quantity - ${quantityclc} , price = ₹
 ${totalpriceclc}`
})

let placeorder5El = document.getElementById("placeorder5")
let odis5El = document.getElementById("odis5")
placeorder5El.addEventListener("click", function () {
    if (disgjEl.textContent === "" && disrasEl.textContent === "" && disfcEl.textContent === "" && dismkEl.textContent === "" && disclcEl.textContent === "") {
        alert("please select at lest one item")
        odis5El.textContent = "please select at lest one item"
    }
    else {
        alert("Order Place Successfully 😄")
        odis5El.textContent = "Order Place Successfully 😄"

    }
})

let clr5El = document.getElementById("clr5")

clr5El.addEventListener("click", function () {
    console.log("click ho rha hai")
    disgjEl.textContent = ""
    disrasEl.textContent = ""
    disfcEl.textContent = ""
    dismkEl.textContent = ""
    disclcEl.textContent = ""
    odis5El.textContent = ""

})