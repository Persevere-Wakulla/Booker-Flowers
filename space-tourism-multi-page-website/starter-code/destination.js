const moon = document.getElementById('moo');
const mars = document.getElementById('mar');
const europa = document.getElementById('eur');
const titan = document.getElementById('tit')

const place = document.getElementById('name');
const pic = document.getElementById('pic')
const description = document.getElementById('lowDown');
const travel = document.getElementById('time');
const distance = document.getElementById('dis');

window.addEventListener('load', function () {
    fetch('./data.json')
        .then((res) => res.json())
        .then((json) => {
            place.textContent = json.destinations[0].name
            description.textContent = json.destinations[0].description
            travel.textContent = json.destinations[0].travel
            distance.textContent = json.destinations[0].distance
            pic.src = json.destinations[0].images.png


            moon.addEventListener('click', () => {
                place.textContent = json.destinations[0].name
                description.textContent = json.destinations[0].description
                travel.textContent = json.destinations[0].travel
                distance.textContent = json.destinations[0].distance
                pic.src = json.destinations[0].images.png
            })
            mars.addEventListener('click', () => {
                place.textContent = json.destinations[1].name
                description.textContent = json.destinations[1].description
                travel.textContent = json.destinations[1].travel
                distance.textContent = json.destinations[1].distance
                pic.src = json.destinations[1].images.png
            })
            europa.addEventListener('click', () => {
                place.textContent = json.destinations[2].name
                description.textContent = json.destinations[2].description
                travel.textContent = json.destinations[2].travel
                distance.textContent = json.destinations[2].distance
                pic.src = json.destinations[2].images.png
            })
            titan.addEventListener('click', () => {
                place.textContent = json.destinations[3].name
                description.textContent = json.destinations[3].description
                travel.textContent = json.destinations[3].travel
                distance.textContent = json.destinations[3].distance
                pic.src = json.destinations[3].images.png
            })


        })
    })