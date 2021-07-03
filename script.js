// 1.Add All Elements

const cart = document.querySelector(".cart")
const buttonAdd1 = document.querySelector(".btn-1")
const buttonAdd2 = document.querySelector(".btn-2")
const buttonAdd3 = document.querySelector(".btn-3")
const buttonAdd4 = document.querySelector(".btn-4")
const itemList = document.querySelector(".item-list")

// Card Element
const card1 = document.querySelector(".card-1")
const card2 = document.querySelector(".card-2")
const card3 = document.querySelector(".card-3")
const card4 = document.querySelector(".card-4")
const emptyCard = document.querySelector(".empty_card")

// Item Price span

const price1span = document.querySelector(".price_span1")
const price2span = document.querySelector(".price_span2")
const price3span = document.querySelector(".price_span3")
const price4span = document.querySelector(".price_span4")

// Increment item count on cart box
// span tag
const qtyC1Span = document.querySelector("#qty__c1")
const qtyC2Span = document.querySelector("#qty__c2")
const qtyC3Span = document.querySelector("#qty__c3")
const qtyC4Span = document.querySelector("#qty__c4")

// span values
let qtyC1 = parseInt(qtyC1Span.getAttribute("data-set"))
let qtyC2 = parseInt(qtyC2Span.getAttribute("data-set"))
let qtyC3 = parseInt(qtyC3Span.getAttribute("data-set"))
let qtyC4 = parseInt(qtyC4Span.getAttribute("data-set"))

// get localdata items

qtyC1 = parseInt(localStorage.getItem("QItem1"))
qtyC1Span.innerHTML = qtyC1

qtyC2 = parseInt(localStorage.getItem("QItem2"))
qtyC2Span.innerHTML = qtyC2
qtyC3 = parseInt(localStorage.getItem("QItem3"))
qtyC3Span.innerHTML = qtyC3
qtyC4 = parseInt(localStorage.getItem("QItem4"))
qtyC4Span.innerHTML = qtyC4

// isNaN conversion

// item price span values
let price1 = parseInt(price1span.getAttribute("data-set"))
let price2 = parseInt(price2span.getAttribute("data-set"))
let price3 = parseInt(price3span.getAttribute("data-set"))
let price4 = parseInt(price4span.getAttribute("data-set"))

// Remove card
const removeCart1 = document.querySelector(".rm-cart-1")
const removeCart2 = document.querySelector(".rm-cart-2")
const removeCart3 = document.querySelector(".rm-cart-3")
const removeCart4 = document.querySelector(".rm-cart-4")

// Nan fixer
if (isNaN(qtyC1)) {
    localStorage.setItem("QItem1", 0)
    localStorage.setItem("QItem2", 0)
    localStorage.setItem("QItem3", 0)
    localStorage.setItem("QItem4", 0)
    qtyC1 = parseInt(localStorage.getItem("QItem1"))
    qtyC2 = parseInt(localStorage.getItem("QItem2"))
    qtyC3 = parseInt(localStorage.getItem("QItem3"))
    qtyC4 = parseInt(localStorage.getItem("QItem4"))

    qtyC1Span.innerHTML = qtyC1
    qtyC2Span.innerHTML = qtyC2
    qtyC3Span.innerHTML = qtyC3
    qtyC4Span.innerHTML = qtyC4
}

// count
const countTag = document.querySelector(".count")
let count = parseInt(countTag.getAttribute("data-set"))

// localstorage
count = parseInt(localStorage.getItem("Item_count"))
if (isNaN(count)) {
    localStorage.setItem("Item_count", 0)

    count = parseInt(localStorage.getItem("Item_count"))
}
countTag.innerHTML = count

// 2.Add Event Listener on Cart Button

cart.addEventListener("click", () => {
    if (count == 0) {
        // itemList.classList.add("open")

        emptyCard.style.display = "flex"
        console.log("Your cart is empty")
    } else {
        emptyCard.style.display = "none"
    }

    if (itemList.classList.contains("open") === false) {
        itemList.classList.add("open")
        console.log(itemList)
    } else {
        itemList.classList.remove("open")
    }
})

// 1

if (qtyC1 !== 0) {
    card1.classList.add("crt-item-add")
    price1span.innerHTML = qtyC1 * price1
}
if (qtyC2 !== 0) {
    card2.classList.add("crt-item-add")
    price2span.innerHTML = qtyC2 * price2
}
if (qtyC3 !== 0) {
    card3.classList.add("crt-item-add")
    price3span.innerHTML = qtyC3 * price3
}
if (qtyC4 !== 0) {
    card4.classList.add("crt-item-add")
    price4span.innerHTML = qtyC4 * price4
}

buttonAdd1.addEventListener("click", () => {
    card1.classList.add("crt-item-add")
    qtyC1 += 1
    count += 1
    countTag.innerHTML = count
    qtyC1Span.innerHTML = qtyC1
    localStorage.setItem("QItem1", qtyC1)
    localStorage.setItem("Item_count", count)
    price1span.innerHTML = qtyC1 * price1
})

removeCart1.addEventListener("click", () => {
    if (qtyC1 === 1) {
        card1.classList.remove("crt-item-add")
    }
    count -= 1
    countTag.innerHTML = count
    qtyC1 -= 1
    qtyC1Span.innerHTML = qtyC1
    localStorage.setItem("QItem1", qtyC1)
    localStorage.setItem("Item_count", count)
    price1span.innerHTML = qtyC1 * price1
})

// 2
buttonAdd2.addEventListener("click", () => {
    card2.classList.add("crt-item-add")
    qtyC2 += 1
    count += 1
    countTag.innerHTML = count
    qtyC2Span.innerHTML = qtyC2
    localStorage.setItem("QItem2", qtyC2)
    localStorage.setItem("Item_count", count)
    price2span.innerHTML = qtyC2 * price2
})

removeCart2.addEventListener("click", () => {
    if (qtyC2 === 1) {
        card2.classList.remove("crt-item-add")
    }
    count -= 1
    countTag.innerHTML = count
    qtyC2 -= 1
    qtyC2Span.innerHTML = qtyC2
    localStorage.setItem("QItem2", qtyC2)
    localStorage.setItem("Item_count", count)
    price2span.innerHTML = qtyC2 * price2
})

// 3
buttonAdd3.addEventListener("click", () => {
    card3.classList.add("crt-item-add")
    qtyC3 += 1
    count += 1
    countTag.innerHTML = count
    qtyC3Span.innerHTML = qtyC3
    localStorage.setItem("QItem3", qtyC3)
    localStorage.setItem("Item_count", count)
    price3span.innerHTML = qtyC3 * price3
})

removeCart3.addEventListener("click", () => {
    if (qtyC3 === 1) {
        card3.classList.remove("crt-item-add")
    }
    count -= 1
    countTag.innerHTML = count
    qtyC3 -= 1
    qtyC3Span.innerHTML = qtyC3
    localStorage.setItem("QItem3", qtyC3)
    localStorage.setItem("Item_count", count)
    price3span.innerHTML = qtyC3 * price3
})

// 4
buttonAdd4.addEventListener("click", () => {
    card4.classList.add("crt-item-add")
    qtyC4 += 1
    count += 1
    countTag.innerHTML = count
    qtyC4Span.innerHTML = qtyC4
    localStorage.setItem("QItem4", qtyC4)
    localStorage.setItem("Item_count", count)
    price4span.innerHTML = qtyC4 * price4
})

removeCart4.addEventListener("click", () => {
    if (qtyC4 === 1) {
        card4.classList.remove("crt-item-add")
    }
    count -= 1
    countTag.innerHTML = count
    qtyC4 -= 1
    qtyC4Span.innerHTML = qtyC4
    localStorage.setItem("QItem4", qtyC4)
    localStorage.setItem("Item_count", count)
    price4span.innerHTML = qtyC4 * price4
})

// count

console.log(count)