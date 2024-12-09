// global variables
const country = document.getElementById('country');
const exchangeD = document.getElementById('exchangeD');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const exchange = document.getElementById('exchange');

// calling data from JSON file
const userData = await fetch('currencyRate.json')
const cData = await userData.json();
console.log(cData)
// changable global variables
let user = document.getElementById('destination')
let dollars = document.getElementById('userAmount')
makeEntry(cData)
// function for calling data 
function makeEntry(data) {
    for (let key in data) {
        let element = data[key]
        let countryName = document.createElement('option')
        countryName.setAttribute('value', JSON.stringify(element))
        countryName.textContent = element.name
        user.append(countryName)
    }
}
// exchange button eventListener
exchange.addEventListener('click', exchangeHandler)
// function telling listener what to do on click
function exchangeHandler() {
    let destination = JSON.parse(user.value)
    let userAmount = dollars.value
    console.log(destination);
    console.log(userAmount);

    let rate = exchangeRate(destination)
    let total = calculate(userAmount, rate)
    display(total, destination)


}
// function for the exchange rate
function exchangeRate({ rate }) {
    console.log(rate);
    return rate
}
// mathmatical calculation function
function calculate(dollars, rate) {
    let total = (dollars * rate).toFixed(2)
    console.log(total);
    return total
}
// display function
function display(num, type) {
    let currency = type.name
    exchangeD.textContent = `${num} ${currency}`
}
// reset button eventListener to return to previous empty state
previous.addEventListener('click', resetHandler)
// function telling reset listener what to do
function resetHandler() {
    exchangeD.textContent = ''
    user.value = ''
    dollars.value = ''
}
