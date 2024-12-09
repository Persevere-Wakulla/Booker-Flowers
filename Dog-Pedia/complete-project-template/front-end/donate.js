const sub = document.getElementById('sub')
const promised = document.getElementById('promises')

async function getData() {
    // get request
    const res = await fetch("http://localhost:3000/front-end/donate.html")
    const data = await res.json()

    console.log(data)

   pledges(data)
}


function addContent(e) {
    e.preventDefault();
// calling the inputs
    const amount = (document.getElementById('amount'))
    const first = (document.getElementById('fname'))
    const last = (document.getElementById('lname'))
    const card = (document.getElementById('creditcard'))
    console.dir(amount);

//build entry
    const newDonation = {
        amount:Number(amount.value),
        fname:first.value,
        lname:last.value,
        creditcard:Number(card.value),
        pledged: false
    };
//POST
    console.dir(newDonation)
    fetch('http://localhost:3000/front-end/donate.html', {
        method: 'POST',
        body: JSON.stringify(newDonation),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        }
    }).then(() => {
    getData()}
    )

    amount.value = '';
    first.value = '';
    last.value = '';
    card.value = '';
}
async function pledges(pledge) {
//instead of being sent pledge=[]
    // const pledge = await getData()
    console.dir(pledge)
    promised.innerHTML = pledge.map((pledge, i) => {

        return `
       <li>
       <input type="checkbox" data-index=${i} id="${i}" ${pledge.pledged ? 'checked' : ''} />
      <label for="${i}"> ${pledge.amount}, ${pledge.fname}, ${pledge.lname} </label>
       </li>
        `;
    }).join('');
}

sub.addEventListener('click', addContent);
getData()
