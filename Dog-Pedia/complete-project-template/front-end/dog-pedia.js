const dogs = await getData()

async function getData() {
    // get request
    const res = await fetch("http://localhost:3000/front-end/dog-pedia.html")
    const data = await res.json()

    console.log(data)

    return data
}

const dropBtns = dogs.sort((a, b) => {
    const nameA = a.breed.toUpperCase()
    const nameB = b.breed.toUpperCase()
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
}).map(dog =>
    `<a href="#${dog.breed}">${dog.breed}</a>`
).join('')

document.getElementById('nav').innerHTML = `
<div class="dropdown">
    <button type="button" class="dropbtn">Breed Search</button>
    <div class="dropdown-content">
        ${dropBtns}
        
    </div>
</div>
`




dogs.sort((a, b) => {
    const nameA = a.breed.toUpperCase()
    const nameB = b.breed.toUpperCase()
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
}).forEach((dog) => {
    document.getElementById('display').innerHTML += `
    <div class="box" id='${dog.breed}'>
    <h1>${dog.breed}</h1>
    <p>${dog.height}</p>
    <p>${dog.weight}</p>
    <img src='${dog.image}'/>
    <section>${dog.specifics}</section>
    </div>`
})

const inputs = document.querySelectorAll('input')

document.getElementById('sub').addEventListener('click', (e) => {
    e.preventDefault()
    const newDog = {}
    inputs.forEach(input => {
        newDog[input.id] = input.value
    })
    fetch("http://localhost:3000/front-end/dog-pedia.html", {
        method: 'POST',
        body: JSON.stringify(newDog),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        }

    })

})