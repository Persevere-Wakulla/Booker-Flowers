// sign up form page
// sign up form local storage
const firstName = document.getElementById('firstNameInput');
const lastName = document.getElementById('lastNameInput');
const creditCard = document.getElementById('credit');
const employment = document.getElementById('occupation');
const homeInfo = document.getElementById('address');
const package = document.querySelector('.dropdown-content');
const doIt = document.getElementById('doIt');

let v = []

function signUps() {
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const creditCardValue = creditCard.value
    const employmentValue = employment.value
    const homeInfoValue = homeInfo.value
    let packageValue = ''
    const children = [...package.children]
    children.forEach((item) => {
        if (item.firstElementChild.checked) {
            packageValue = item.lastElementChild.textContent
        }
    })
    v.push(firstNameValue, lastNameValue, creditCardValue, employmentValue, homeInfoValue, packageValue);
    storeInfo(v)
}


doIt.addEventListener('click', signUps)
console.log(doIt)
console.log(localStorage)


function storeInfo(v) {
    localStorage.setItem('signUps()', JSON.stringify(v))
}

