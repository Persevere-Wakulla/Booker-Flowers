let currentCustomer = {}
let currentCart = []
let inside = false

console.log(location.pathname);

if (location.pathname === "/front-end/customer.html") {


    //customer sign-in starts here

    const customers = await getCustomer()

    async function getCustomer() {
        const res = await fetch("http://localhost:3000/front-end/customer.html")
        const data = await res.json()
        console.log(data)

        return data
    }



    const customerBtns = customers.map(customer =>
        `<a href="#${customer.fname}">${customer.fname}</a>`
    ).join('')

    document.getElementById('nav').innerHTML = `
    <div class="dropdown">
     <button type="button" class="dropbtn">Customer Search</button>
     <div class="dropdown-content">
     ${customerBtns}
     </div>
    </div>
    `

    customers.forEach((customer) => {
        document.getElementById('display').innerHTML += `<div class="box" id='${customer.password}'>
        <p>${customer.fname}</p>
        <p>${customer.lname}</p>
       <div>${customer.cart}</div>
        </div>`
    })


    const inputs = [...document.querySelectorAll('.enquirer')]

    document.getElementById('sub').addEventListener('click', (e) => {
        e.preventDefault()
        const newCustomer = {}
        inputs.forEach(input => {
            newCustomer[input.id] = input.value

        })
        fetch("http://localhost:3000/front-end/customer.html", {
            method: 'POST',
            body: JSON.stringify(newCustomer),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            }
        })

    })

    const signIns = [...document.querySelectorAll('.sign-in')]
    const first = document.getElementById('first')
    const last = document.getElementById('last')
    const code = document.getElementById('code')

    const loggedIn = await getCustomer()

    async function signIn() {
        const res = await fetch("http://localhost:3000/front-end/customer.html")
        const data = await res.json()
console.log(data);
        currentCustomer = data.find((customer) => {

            (customer.fname === first.value) && (customer.lname === last.value) && (customer.password === code.value)
            if (signIns.value === 0) {
                console.log('we are here 1');
                alert('fill in required info please.')
            }
            if (!customer) {
                console.log('we are here 2');
                alert('incorrect fname, lname or password')
            }
            else {
                console.log('we are here 3');
                inside = customer.id
                alert('You may shop.')
                first.value = ''
                last.value = ''
                code.value = ''
                return customer

            }
        })
        
        console.log(currentCustomer)



        // return currentCustomer

    }
    
    document.getElementById('logIn').addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target);

        inside = true
        signIn()
        alert('You are logged in')
        first.value = ''
        last.value = ''
        code.value = ''

        // return currentCustomer
    })
    console.log(currentCustomer)


    document.getElementById('logOut').addEventListener('click', (e) => {
        inside = false

        alert('You are logged out')
    })


} else {


    // products starts here:::
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
        <p>#in-stock:${product.instock}</p>
        <button id=${product.item} class='purchase'>Add to Cart</button>
        </div>`

    })
    /*product.product = product.item
    product.amount needs to be subtracted from product.instock
    product.price * product.amount = total
    display (name, total, amount and change number instock to represent what is left in stock after sale.) */
    const purchasebtns = document.querySelectorAll('.purchase')
    purchasebtns.forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(signed);
        const toAdd = supplies.find(prod => prod.item === e.target.id)
        let purchase = toAdd
         
       
        /**I added the currentCustomer.cart, to stop the error and it worked but I still am only getting the inputs I do not know how to access the cart. Without my add in the fetch throws an error */
        fetch("http://localhost:3000/front-end/customer.html", currentCustomer, {
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
}