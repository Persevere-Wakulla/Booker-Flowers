import look from './user.js'

const currentCustomer = look()

const supplies = await getSupplies()

async function getSupplies() {
    const res = await fetch("http://localhost:3000/front-end/products.html")
    const data = await res.json()
    console.log(data)

    return data
}

const productBtns = supplies.map(product =>
    `<a href="#${product.item}">${product.item}</a>`
).join('')

document.getElementById('nav').innerHTML = `
    <div class="dropdown">
      <button type="button" class="dropbtn">Product Search</button>
      <div class="dropdown-content">
        ${productBtns}
      </div>
    </div>
    `

supplies.forEach((product) => {
    document.getElementById('display').innerHTML += `
        <div class="box" id="${product.item}">
        <h1>${product.item}</h1>
        <p>${product.price}</p>
        <img src='${product.img}'/>
        <p>${product.description}</p>
        <p><span>#in-stock:</span>${product.instock}</p>
        <button id=${product._id} class='purchase'>Add to Cart</button>
        </div>`

})
/*product.product = product.item
product.amount needs to be subtracted from product.instock
product.price * product.amount = total
display (name, total, amount and change number instock to represent what is left in stock after sale.) */
const purchasebtns = document.querySelectorAll('.purchase')
purchasebtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault()
    const toAdd = supplies.find(prod => prod._id === e.target.id)
    console.log(toAdd);
    let purchase = {customer: currentCustomer, item: toAdd}


    /**I added the currentCustomer.cart, to stop the error and it worked but I still am only getting the inputs I do not know how to access the cart. Without my add in the fetch throws an error */
    fetch("http://localhost:3000/front-end/products.html", {
        method: 'PUT',
        body: JSON.stringify(purchase),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => res.json()).then((data) => console.log(data))



}))
const inputs = document.querySelectorAll('.proadd')
// console.log(inputs);
document.getElementById('sub').addEventListener('click', (e) => {
    e.preventDefault()
    const newProduct = {}
    inputs.forEach(input => {
        newProduct[input.id] = input.value
    })
    fetch("http://localhost:3000/front-end/products.html", {
        method: 'POST',
        body: JSON.stringify(newProduct),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        }

    }).then((res) => res.json()).then((data) => console.log(data))

})