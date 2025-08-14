// Rose Falooda
let qntadd1El = document.getElementById("qntadd1")
let disrEl = document.getElementById("disr")
let quantity = 0
let price = 50
qntadd1El.addEventListener("click", function () {
    quantity++
    let totalprice = quantity * price
    disrEl.textContent = `quantity - ${quantity} , price = ₹
 ${totalprice}`
})

//  Malai Kofta Royal
let qntadd2El = document.getElementById("qntadd2")
let dismEl = document.getElementById("dism")
let quantity2 = 0
let price2 = 150
qntadd2El.addEventListener("click", function () {
    quantity2++
    let totalprice2 = quantity2 * price2
    dismEl.textContent = `quantity - ${quantity2} , price = ₹
 ${totalprice2}`
})
// Tandoori Broccoli
let qntadd3El = document.getElementById("qntadd3")
let distEl = document.getElementById("dist")
let quantity3 = 0
let price3 = 70
qntadd3El.addEventListener("click", function () {
    quantity3++
    let totalprice3 = quantity3 * price3
    distEl.textContent = `quantity - ${quantity3} , price = ₹
 ${totalprice3}`
})
// Kesar Badam Milk
let qntadd4El = document.getElementById("qntadd4")
let diskEl = document.getElementById("disk")
let quantity4 = 0
let price4 = 170
qntadd4El.addEventListener("click", function () {
    quantity4++
    let totalprice4 = quantity4 * price4
    diskEl.textContent = `quantity - ${quantity4} , price = ₹
 ${totalprice4}`
})
// Paneer Tikka Biryani
let qntadd5El = document.getElementById("qntadd5")
let disptEl = document.getElementById("dispt")
let quantity5 = 0
let price5 = 250
qntadd5El.addEventListener("click", function () {
    quantity5++
    let totalprice5 = quantity5 * price5
    disptEl.textContent = `quantity - ${quantity5} , price = ₹
 ${totalprice5}`
})

// Zafrani Veg Biryani
let qntadd6El = document.getElementById("qntadd6")
let diszEl = document.getElementById("disz")
let quantity6 = 0
let price6 = 150
qntadd6El.addEventListener("click", function () {
    quantity6++
    let totalprice6 = quantity6 * price6
    diszEl.textContent = `quantity - ${quantity6} , price = ₹
 ${totalprice6}`
})
// Kadhai Paneer
let qntadd7El = document.getElementById("qntadd7")
let diskpEl = document.getElementById("diskp")
let quantity7 = 0
let price7 = 270
qntadd7El.addEventListener("click", function () {
    quantity7++
    let totalprice7 = quantity7 * price7
    diskpEl.textContent = `quantity - ${quantity7} , price = ₹
 ${totalprice7}`
})

let placeorder4El = document.getElementById("placeorder4")
let odis4El = document.getElementById("odis4")
placeorder4El.addEventListener("click", function () {
    if (disrEl.textContent === "" && dismEl.textContent === "" && distEl.textContent === "" && diskEl.textContent === "" && disptEl.textContent === "" && diszEl.textContent === "" && diskpEl.textContent === "") {
        alert("please select at lest one item")
        odis4El.textContent = "please select at lest one item"
    }
    else {
        alert("Order Place Successfully 😄")
        odis4El.textContent = "Order Place Successfully 😄"

    }
})

let clr4El = document.getElementById("clr4")

clr4El.addEventListener("click", function () {
    console.log("click ho rha hai")
    diskEl.textContent = ""
    disptEl.textContent = ""
    diszEl.textContent = ""
    diskpEl.textContent = ""
    odis4El.textContent = ""

})