const knowledges = await getKnowledge()

async function getKnowledge() {
    const res = await fetch("http://localhost:3000/front-end/knowledge.html")
    const data = await res.json()
    console.log(data)

    return data
}

const knowBtns = knowledges.map(knowledge =>
    `<a href="#${knowledge.topic}">${knowledge.topic}</a>`
).join('')

document.getElementById('nav').innerHTML = `
<div class="dropdown">
   <button type="button" class="dropbtn">Knowledge Search</button>
   <div class="dropdown-content">
    ${knowBtns}
    </div>
</div>
`

knowledges.forEach((knowledge) => {
    document.getElementById('display').innerHTML += `
    <div class="box" id='${knowledge.topic}'>
    <p>id:${knowledge.id}</p>
    <h1>${knowledge.topic}</h1>
    <p><span>ISSUE:</span> ${knowledge.issue}</p>
    <p><span>SOLUTION:</span> ${knowledge.solutions}</p>
    <p><span>THOUGHTS:</span> ${knowledge.thoughts}</p>
    </div>`
})

const inputs = [...document.querySelectorAll('input')]

document.getElementById('sub').addEventListener('click', (e) => {
    e.preventDefault()
    const newKnowledge = {}
    inputs.forEach(input => {
        newKnowledge[input.id] = input.value
    })
    fetch("http://localhost:3000/front-end/knowledge.html", {
        method: 'POST',
        body: JSON.stringify(newKnowledge),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => res.json()).then((data) => console.log(data))

})