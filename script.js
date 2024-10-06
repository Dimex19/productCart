//fetching the data
fetch("./data.json").then((response) => response.json()).then((data) => {
    console.log(data);
    card = ""
    data.map((item) => {
        card += `
        <div id="card1">
            <img src="${item.image.desktop}" alt="">
            <div id="addToCart" onclick="addToCart('${item.category}','${item.name}')"  data-category="${item.category}">
                        <img src="./assets/images/icon-add-to-cart.svg" alt="">
                        <p>Add to Cart</p>
            </div>
            <div id="addToCartOnclick"  data-name="${item.name}">
                <img src="./assets/images/icon-decrement-quantity.svg" alt="" onclick="decrement()">
                <p>0</p>
                <img src="./assets/images/icon-increment-quantity.svg" alt=""
                onclick="increment()">
            </div>
            <p id="p1">${item.category}</p>
            <p id="p2">${item.name}</p>
            <p id="p3">$<span>${item.price.toFixed(2)}</span></p>
            </div>`
    })
    document.querySelector(".productCards").innerHTML = card
}).catch((error) => console.log(error))

//this function changes the add to cart button and add items to the cart
function addToCart(category,name) {
    console.log(`item from category ${category} added to cart`);
    
    // document.querySelector(`#addToCart`).style.display = "none"
    
    document.querySelector(`[data-category="${category}"]`).style.display = "none"
    // document.querySelector("#addToCartOnclick").style.display = "flex"
    document.querySelector(`[data-name="${name}"]`).style.display = "flex"
    // document.querySelector("#addToCartOnclick p").textContent++
    document.querySelector(`[data-name="${name}"] p`).textContent++
    document.querySelector(".cart h2 span").textContent++
    document.querySelector(`[data-name="${name}"] h2 span`).textContent++

    // document.querySelector(".items").style.display = "block"
    document.querySelector(`[item-data="${name}"]`).style.display = "flex"
    // document.querySelector("#emptyCart").style.display = "none"
    document.querySelector(`[data-category="${category}"]`).style.display = "none"
}

//this function increments and add items to the cart
function increment(){
    document.querySelector("#addToCartOnclick p").textContent++
    document.querySelector(".cart span").textContent++
    document.querySelector("#quantity span").textContent++

    document.querySelector("#totalPrice span").textContent = eval(document.querySelector("#quantity span").textContent * document.querySelector("#costPrice #price").textContent)
}

//this function decrements and remove items to the cart
function decrement(){
    val = document.querySelector("#addToCartOnclick p").textContent
    // console.log(val);
    
    if (val > 1){
        document.querySelector("#addToCartOnclick p").textContent--
        document.querySelector(".cart span").textContent--
        document.querySelector("#quantity span").textContent--
        document.querySelector("#totalPrice span").textContent = eval(document.querySelector("#quantity span").textContent * document.querySelector("#costPrice #price").textContent)
    }
    else {
        document.querySelector("#addToCart").style.display = "flex"
        document.querySelector("#addToCartOnclick").style.display = "none"
        document.querySelector("#addToCartOnclick p").textContent--
        document.querySelector(".cart span").textContent = 0
        document.querySelector(".items").style.display = "none"
        document.querySelector("#emptyCart").style.display = "block"
    }
}



// function addToCart() {
//     console.log("hello")
//     cart = `
//         <img src="./images/image-waffle-desktop.jpg" alt="">
//         <div id="addToCart">
//             <img src="./images/icon-decrement-quantity.svg" alt="" style="width: 15px;
//         height: 15px;
//         border: 1px solid white;
//         border-radius: 7.5px;
//         padding: 2px;">
//             <p style="color:white; margin-left=0px;">1</p>
//             <img src="./images/icon-increment-quantity.svg" alt="" style="width: 15px;
//         height: 15px;
//         border: 1px solid white;
//         border-radius: 7.5px;
//         padding: 2px;"
//         </div>
//         <p>Waffle</p>
//         <p>Waffle with berries</p>
//         <p>$6.50</p>`
//     document.querySelector("#card1").innerHTML = cart
    
//     console.log(document.querySelector("#addToCart"));

//     // document.querySelector("#addToCart").classList.add("newStyle")
//     document.querySelector("#addToCart").style.backgroundColor = "hsl(14, 86%, 42%)";

//     document.querySelector("#addToCart").classList.add("space-around")

//     let dive = document.querySelector("#addToCart")
//     if (dive.classList.contains("space-around")) {
//         dive.classList.remove("space-around");
//     } else {
//         dive.classList.add("space-around");
//     }
// }


// console.log(document.querySelector("#addToCart"));
// console.log(document.querySelector("#addToCart").classList.add("addToCartOnclick"));

