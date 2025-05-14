
// const product = [
//     {
//       id: 0,
//       image: 'images/1.png',
//       title: 'Z Flip Foldable Mobile',
//       price: 120,
//     },
//     {
//       id: 1,
//       image: 'images/2.png',
//       title: 'Air Pods Pro',
//       price: 60,
//     },
//     {
//       id: 2,
//       image: 'images/3.png',
//       title: '250D DSLR Camera',
//       price: 230,
//     },
//     {
//       id: 3,
//       image: 'images/4.png',
//       title: 'Head Phones',
//       price: 100,
//     }
//   ];
//   const categories = [...new Set(product.map((item) => { return item }))]
//   let i = 0;
//   document.getElementById('root').innerHTML = categories.map((item) => {
//     var { image, title, price } = item;
//     return (
//       `<div class='box'>
//         <div class='img-box'>
//           <img class='images' src=${image}></img>
//         </div>
//         <div class='bottom'>
//           <p>${title}</p>
//           <h2>$ ${price}.00</h2>` +
//           "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
//         `</div>
//       </div>`
//     )
//   }).join('')
  
//   var cart = [];
  
//   function addtocart(a) {
//     cart.push({ ...categories[a] });
//     displaycart();
//   }
//   function delElement(a) {
//     cart.splice(a, 1);
//     displaycart();
//   }
  
//   function displaycart() {
//     let j = 0, total = 0;
//     document.getElementById("count").innerHTML = cart.length;
//     if (cart.length == 0) {
//       document.getElementById('cartItem').innerHTML = "Your cart is empty";
//       document.getElementById("total").innerHTML = "$ " + 0 + ".00";
//     }
//     else {
//       document.getElementById("cartItem").innerHTML = cart.map((items) => {
//         var { image, title, price } = items;
//         total = total + price;
//         document.getElementById("total").innerHTML = "$ " + total + ".00";
//         return (
//           `<div class='cart-item'>
//             <div class='row-img'>
//               <img class='rowimg' src=${image}>
//             </div>
//             <p style='font-size:12px;'>${title}</p>
//             <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
//           "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
//         );
//       }).join('');
//     }
//   }


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Black Bag',
        image: 'i1.jpg',
        price: 150000
    },
    {
        id: 2,
        name: 'Babyblue Bag',
        image: 'i2.jpeg',
        price: 220000
    },
    {
        id: 3,
        name: 'White Bag',
        image: 'i3.jpeg',
        price: 120000
    },
    {
        id: 4,
        name: 'Bink Bag',
        image: 'i4.jpeg',
        price: 140000
    },
    {
        id: 5,
        name: 'Paige Bag',
        image: 'i5.jpeg',
        price: 320000
    },
    {
        id: 6,
        name: 'Gray Bag',
        image: 'i6.jpeg',
        price: 400000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}$</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity += 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key)=>{
        if(value != null){
            totalPrice += value.price * value.quantity;
            count += value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}" /></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = `$${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity){
    if(newQuantity <= 0){
        delete listCards[key];
    } else {
        listCards[key].quantity = newQuantity;
    }
    reloadCard();
}

// Login elements
// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// // Page elements
// const loginPage = document.getElementById("main-holder");
// const shoppingPage = document.getElementById("shopping-page");

// // Login button event
// loginButton.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevent the form from submitting and reloading the page
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user" && password === "123456") {
//         // Successful login: hide login page and show shopping page
//         alert("You have successfully logged in.");
//         loginPage.classList.add("hidden"); // Hide login page
//         shoppingPage.classList.remove("hidden"); // Show shopping page
//     } else {
//         // Show error message
//         loginErrorMsg.style.opacity = 1;
//     }
// });
