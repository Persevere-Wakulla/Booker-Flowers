const adopts = await getAdopt()


async function getAdopt() {
    const res = await fetch('http://localhost:3000/front-end/adopt.html')
    const data = await res.json()
    console.log(data)

    return data
}

const adoptBtns = adopts.map(adopt =>
    `<a href="#${adopt.fname}">${adopt.fname}</a>`
).join('')

document.getElementById('nav').innerHTML = `
    <div class="dropdown">
     <button type="button" class="dropbtn">Adoption Search</button>
     <div class="dropdown-content">
    ${adoptBtns}
     </div>
    </div>
    `
adopts.forEach((adoption) => {
    document.getElementById('display').innerHTML += `
        <div class="box" id="${adoption.fname}">
        <p><span>FirstName:</span> ${adoption.fname}</p>
        <p><span>LastName:</span> ${adoption.lname}</p>
        <p><span>Breed & Needs:</span> ${adoption.specific}</p>
        <p><span>Other Pets:</span> ${adoption.pets}</p>
        <p><span>Vet Name:</span> ${adoption.vet}</p>
        `
})

const inputs = [...document.querySelectorAll('input')]

document.getElementById('sub').addEventListener('click', (e) => {
    e.preventDefault()
    const newAdoption = {}
    inputs.forEach(input => {
        if (input.id === 'cell') {
            newAdoption.cell = Number(input.value)
        } else {
            newAdoption[input.id] = input.value
        }
    })
    fetch("http://localhost:3000/front-end/adopt.html", {
        method: 'POST',
        body: JSON.stringify(newAdoption),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        }

    }).then((res) => res.json()).then((data) => console.log(data))
})