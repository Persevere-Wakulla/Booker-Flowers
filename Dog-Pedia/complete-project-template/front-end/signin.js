let customers = await getCustomer()

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
   <div>${customer.cart.map(item =>`<p>${item.item} <span class="price-tag">${item.price}</span></p>`)}</div>
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
// const first = document.getElementById('first')
// const last = document.getElementById('last')
// const code = document.getElementById('code')



async function signIn() {
    let user = {}
    signIns.forEach((inp) => {
        user[inp.id] = inp.value
    })   
    const res = await fetch("http://localhost:3000/front-end/customer.html", {
        method: 'POST',
        body: JSON.stringify(user),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json()
    console.log(data);
    sessionStorage.setItem("user", JSON.stringify(data))
    first.value = ''
    last.value = ''
    code.value = ''
}

document.getElementById('logIn').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target);

    // inside = true
    signIn(first, last, code)
    alert('You are logged in')


    // return currentCustomer
})
// console.log(currentCustomer)


document.getElementById('logOut').addEventListener('click', (e) => {
    // inside = false
    sessionStorage.removeItem('user')
    alert('You are logged out')
})