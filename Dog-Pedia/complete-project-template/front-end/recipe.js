const treats = await getTreat()

async function getTreat() {
    const res = await fetch("http://localhost:3000/front-end/recipe.html")
    const data = await res.json()
    console.log(data)

    return data
}

const recipeBtns = treats.map(recipe =>
    `<a href="#${recipe.title}">${recipe.title}</a>`
).join('')

document.getElementById('nav').innerHTML = `
<div class="dropdown">
<button type="button" class="dropbtn">Recipe Search</button>
<div class="dropdown-content">
 ${recipeBtns}
 </div>
</div>
`

treats.forEach((recipe) => {
    document.getElementById('display').innerHTML += `
    <div class="box" id="${recipe.title}">
    <h1>${recipe.title}</h1>
    <p><span>DESCRIPTION:</span> ${recipe.description}</p>
    <p><span>INGREDIENTS:</span> ${recipe.ingredients}</p>
    <p><span>DIRECTIONS:</span> ${recipe.directions}</p>
    `
})

const inputs = [...document.querySelectorAll('input')]

document.getElementById('sub').addEventListener('click', (e) => {

    const newRecipe = {}
    inputs.forEach(input => {
        newRecipe[input.id] = input.value
    })
    fetch("http://localhost:3000/front-end/recipe.html", {
        method: 'POST',
        body: JSON.stringify(newRecipe),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => res.json()).then((data) => console.log(data))
    
})