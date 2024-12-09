
// objects to call data
const userData = await fetch('https://fakestoreapi.com/users')
const uData = await userData.json();
console.log(uData)
// use to call and after log in remove form display
const form = document.getElementsByTagName('form');
// running total calculator as items are placed in shopping cart
const calculator = document.getElementById('calculator');
// choices for shopping options
const categories = document.getElementById('categories');
// mandatory log-in button
const logIn = document.getElementById('logIn');
// button to add items to shopping cart and add to balance
const add = document.getElementById('add');
// button to remove items from shopping cart and subtract from balance
const remove = document.getElementById('remove');
// showcase button to show item in display
const showcase = document.getElementById('showcase');
// mandatory log-in button
const logout = document.getElementById('logout');
// buy button resets calculator to 0
const buy = document.getElementById('buy')
// to display store on submission
const myStore = document.querySelector('.bgi');
const dropdown = document.getElementById('dropdownbtn');


// to clear out the form text after validation
let firstNameInput = document.getElementById('firstNameInput');
let lastNameInput = document.getElementById('lastNameInput');
let passWordInput = document.getElementById('passWordInput');
// shopping cart to hold items for purchase
let cart = document.getElementById('shoppingCart');
// window to display products
let productDisplay = document.getElementById('productDisplay');
let pDisplay = document.getElementById('pDisplay');

logIn.addEventListener('click', validation)    // form validation function
let myId

function validation(eventObj) {
    eventObj.preventDefault();
    let myUser = uData.find((user) => user.name.firstname === firstNameInput.value && user.name.lastname === lastNameInput.value && user.password === passWordInput.value)
    if (form[0][1].value.length === 0) {
        alert('fill in required info please.');
    }
    if (!myUser) {
        alert('incorrect name or password')
    }
    else {
        alert(`You may shop.`)
        myId = myUser.id
        // At this point the form should go display none and the store nav appear
        firstNameInput.value = ''
        lastNameInput.value = ''
        passWordInput.value = ''
        form.style.display = 'none'
        myStore.style.display = 'block'
        return true
    }
   
}

// function to pull data from fake store api

const productData = await fetch('https://fakestoreapi.com/products')
const pData = await productData.json();
console.log(pData)


let newBalance = 0;
let newItem;
// nav eventListener
const locator = document.querySelector('nav')
locator.addEventListener('click', ev => {
    let target = ev.target.textContent
    // console.log(target)
    // filter using target
    let filter = pData.filter((item) => item.category === target.toLowerCase())
    // console.log(filter)
    productDisplay.replaceChildren([])
    pDisplay.replaceChildren([])

    // use filter in for each to display
    filter.forEach(item => {
        let product = document.createElement('div');
        let title = document.createElement('h3');
        let price = document.createElement('h2');
        let picture = document.createElement('img');
        product.classList.add('product');
        title.classList.add('title');
        price.classList.add('price');
        picture.classList.add('img');
        title.textContent = `${item.title}`
        price.textContent = `$${item.price}`
        picture.src = item.image;
        product.append(price);
        product.append(picture);
        product.append(title);
        productDisplay.append(product);
        product.addEventListener('click', (ev) => {
            let myItem = ev.target.src
            console.log(myItem)
            newItem = pData.find((item) => item.image === myItem)

        })
    });

})

// adding the price in thecalculator
add.addEventListener('click', () => {

    let price = newItem.price
    calculator.textContent = price + newBalance
    newBalance += price
    console.log(newBalance)

    cartArr.push(newItem)//(obj)
    cart.replaceChildren([])
    // then loop through cart to display items
    cartArr.forEach(item => {
        let product = document.createElement('div');
        let title = document.createElement('h3');
        let price = document.createElement('h2');
        let picture = document.createElement('img');
        title.classList.add('bought');
        price.classList.add('bought');
        picture.classList.add('bought');
        title.textContent = `${item.title}`
        price.textContent = `$${item.price}`
        picture.src = item.image;
        product.append(price);
        product.append(picture);
        product.append(title);
        cart.append(product);

    })


})
// subtracting the price in the calculator
remove.addEventListener('click', () => {
    console.log(newItem.price)
    let price = newItem.price
    calculator.textContent = newBalance - price
    newBalance -= price
    console.log(newBalance)
    let index = cartArr.indexOf(newItem)
    cartArr.splice(index, 1)//(obj)
    cart.replaceChildren([])
    // then loop through cart to display items

    cartArr.forEach(item => {
        let product = document.createElement('div');
        let title = document.createElement('h3');
        let price = document.createElement('h2');
        let picture = document.createElement('img');
        title.classList.add('bought');
        price.classList.add('bought');
        picture.classList.add('bought');
        title.textContent = `${item.title}`
        price.textContent = `$${item.price}`
        picture.src = item.image;
        product.append(price);
        product.append(picture);
        product.append(title);
        cart.append(product);
    })

})

// showing a clicked on product
showcase.addEventListener('click', () => {
    // console.log(newItem)
    pDisplay.replaceChildren([])
    let product = document.createElement('div');
    let title = document.createElement('h3');
    let price = document.createElement('h2');
    let picture = document.createElement('img');
    let description = document.createElement('p');
    title.classList.add('title');
    price.classList.add('price');
    picture.classList.add('img');
    description.classList.add('description');
    title.textContent = `${newItem.title}`
    price.textContent = `$${newItem.price}`
    description.textContent = `${newItem.description}`
    picture.src = newItem.image;
    product.append(price);
    product.append(picture);
    product.append(title);
    product.append(description);
    pDisplay.append(product);
})


logout.addEventListener('click', () => {
    cart.replaceChildren([])
    myForm.style.display = 'block'
    myStore.style.display = 'none'

})
const cartArr = []
// buy to reset calculator
buy.addEventListener('click', (ev) => {
    productDisplay.replaceChildren([])
    pDisplay.replaceChildren([])
    calculator.textContent = ''
    newBalance = ''
    alert('Enjoy your products, Please come again!')

})


const cartRes = await fetch('https://fakestoreapi.com/carts')
const cData = await cartRes.json()
console.log(cData)
console.log(cart)
console.log(products)
 console.log(uData)