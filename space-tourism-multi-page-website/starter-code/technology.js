const capsule = document.getElementById('cap');
const spaceport = document.getElementById('spa');
const vehicle = document.getElementById('veh');


const term = document.getElementById('term');
const pic = document.getElementById('pic')
const description = document.getElementById('lowDown');



window.addEventListener('load', function () {
    fetch('./data.json')
        .then((res) => res.json())
        .then((json) => {

            term.textContent = json.technology[0].name
            description.textContent = json.technology[0].description
            pic.src = json.technology[0].images.portrait


            capsule.addEventListener('click', () => {
                term.textContent = json.technology[0].name
                description.textContent = json.technology[0].description
                pic.src = json.technology[0].images.portrait
            })
            spaceport.addEventListener('click', () => {
                term.textContent = json.technology[1].name
                description.textContent = json.technology[1].description
                pic.src = json.technology[1].images.portrait
            })
            vehicle.addEventListener('click', () => {
                term.textContent = json.technology[2].name
                description.textContent = json.technology[2].description
                // pictures lined up wrong changing the numbers solved the problem
                pic.src = json.technology[2].images.portrait
            })
        })
})