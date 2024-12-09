const commander = document.getElementById('com');
const specialist = document.getElementById('spe');
const pilot = document.getElementById('pil');
const engineer = document.getElementById('eng')

const person = document.getElementById('name');
const job = document.getElementById('role');
const lowDown = document.getElementById('bio');
const pic = document.getElementById('pic');

window.addEventListener('load', function () {
    fetch('./data.json')
        .then((res) => res.json())
        .then((json) => {

            person.textContent = json.crew[0].name
            job.textContent = json.crew[0].role
            lowDown.textContent = json.crew[0].bio
            pic.src = json.crew[0].images.png

            commander.addEventListener('click', () => {
                person.textContent = json.crew[0].name
                job.textContent = json.crew[0].role
                lowDown.textContent = json.crew[0].bio
                pic.src = json.crew[0].images.png
            })
            specialist.addEventListener('click', () => {
                person.textContent = json.crew[1].name
                job.textContent = json.crew[1].role
                lowDown.textContent = json.crew[1].bio
                pic.src = json.crew[1].images.png
            })
            pilot.addEventListener('click', () => {
                person.textContent = json.crew[2].name
                job.textContent = json.crew[2].role
                lowDown.textContent = json.crew[2].bio
                pic.src = json.crew[2].images.png
            })
            engineer.addEventListener('click', () => {
                person.textContent = json.crew[3].name
                job.textContent = json.crew[3].role
                lowDown.textContent = json.crew[3].bio
                pic.src = json.crew[3].images.png
            })

        })
})
