// all const
const logo = document.getElementById('moon-sun');
const userInput = document.getElementById('share');
const list = document.getElementById('list');
const image = document.getElementById('icon-cross');
const paragraph = document.getElementById('activity');
const all = document.getElementById('everything');
const active = document.getElementById('needsdoing');
const killedIt = document.getElementById('finished');
const headerElem = document.querySelector('header');
const bodyElem = document.querySelector('body');
const itemsLeft = document.getElementById('counter');
const itemsCompleted = document.getElementById('over');
const checkbox = document.getElementById('input');
const remove = document.getElementById('reg');
const trash = document.getElementById('trash');
const reorder = document.getElementById('reorder');


// new changeable variables
let item = document.getElementById('item');


// todo list array and the empty array for creating a new list
let todoList = [];
// when box is checked subtract -1 from todoList and add to completed arry +1
let completedList = [];
// array in drop reorder list box for dragging, dropping and reordering
let reorderArr = [];

userInput.addEventListener('keypress', enterHandler);
logo.addEventListener('click', logoHandler);
all.addEventListener('click', allHandler);
active.addEventListener('click', activeHandler);
killedIt.addEventListener('click', killedItHandler);
trash.addEventListener('click', trashHandler);
reorder.addEventListener('click', reorderHandler);



// handler for the entering of events
function enterHandler(event) {
    if (event.key === 'Enter') {
        let newP = document.createElement('p')
        newP.textContent = userInput.value
        const newItem = document.createElement('li')
        const img = document.createElement('img')
        img.src = './images/icon-cross.svg'
        // x button removing the content when pressed
        img.addEventListener('click', removeHandler);
        itemsLeft.textContent = todoList.length;
        itemsCompleted.textContent = completedList.length;
        const button = document.createElement('input')
        button.type = 'checkbox'
        newItem.classList.add('flex')
        list.append(newItem)
        newItem.append(button)
        newItem.append(newP)
        newItem.append(img)
        // for drag and drop
        newItem.setAttribute('ondragStart', 'dStart(event)')
        newItem.setAttribute('draggable', true)
        // reset user Input area
        userInput.value = ''
        // pushing new li's into todoList array
        todoList.push(newItem)
        itemsLeft.textContent = todoList.length;
        // new button has it's own event listener and handler
        button.addEventListener('click', checkHandler);
        function checkHandler() {
            //  let isChecked = false
            //  isChecked = !isChecked

            if (todoList.includes(this.parentElement)) {
                let activeIndex = todoList.indexOf(this.parentElement)
                todoList.splice(activeIndex, 1)
                completedList.push(this.parentElement)
                // counting newitems pushed into todo array
                itemsLeft.textContent = todoList.length;
                //counting newitems pushed into completed array
                itemsCompleted.textContent = completedList.length;
                return
            }
            if (completedList.includes(this.parentElement)) {
                let completedIndex = completedList.indexOf(this.parentElement)
                completedList.splice(completedIndex, 1)
                todoList.push(this.parentElement)
                itemsLeft.textContent = todoList.length;
                itemsCompleted.textContent = completedList.length;
                return
            }
        }
    }
}
// handler for the light and dark mode
let isLightMode = true;
function logoHandler() {
    document.documentElement.classList.toggle('dark-mode')
    isLightMode = !isLightMode
    if (isLightMode) {
        logo.src = './images/icon-moon.svg'
        headerElem.style.backgroundImage = 'url(./images/bg-mobile-light.jpg)'
        bodyElem.style.backgroundImage = 'url(./images/bg-mobile-light.jpg)'
    } else {
        logo.src = './images/icon-sun.svg'
        headerElem.style.backgroundImage = 'url(./images/bg-mobile-dark.jpg)'
        bodyElem.style.backgroundImage = 'url(./images/bg-mobile-dark.jpg)'
    }
}
// function called to remove content of li when x button is pushed.
function removeHandler() {
    this.parentElement.remove()

    if (todoList.includes(this.parentElement)) {

        let activeIndex = todoList.indexOf(this.parentElement)
        todoList.splice(activeIndex, 1)
    } if (completedList.includes(this.parentElement)) {

        let completedIndex = completedList.indexOf(this.parentElement)
        completedList.splice(completedIndex, 1)
    }
    itemsLeft.textContent = todoList.length;
    itemsCompleted.textContent = completedList.length;
    return
}
function allHandler() {
    list.innerHTML = ''
    let allList = todoList.concat(completedList)
    for (let i = 0; i < allList.length; i++) {
        list.append(allList[i])
    }
    return
}

function activeHandler() {
    list.innerHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        list.append(todoList[i])
    }
    return
}
function killedItHandler() {
    list.innerHTML = ''
    for (let i = 0; i < completedList.length; i++) {
        list.append(completedList[i])
    }
    return
}
function trashHandler() {
    list.innerHTML = ''
    for (let i = 0; i < completedList.length; i++) {
        completedList[i].remove()
        completedList = []
        itemsCompleted.textContent = completedList.length;
    }
    return
}
let holderItem;
function dStart(event) {
    console.dir(event);
    holderItem = event.target;
}
function nDrop(event) {
    event.preventDefault();
}
function dDrop(event) {
    console.dir('we got')
    console.dir(event);
    event.preventDefault();
    event.target.appendChild(holderItem);
    if (event.target.className === 'dropsite') {
        console.dir('in our if')
        reorderArr.push(holderItem)
    }
}

function reorderHandler() {
    todoList = []
    for (let i = 0; i < reorderArr.length; i++){
        todoList.push(reorderArr[i])
    }
    for (let i = 0; i < todoList.length; i++) {
        list.append(todoList[i])
    }
    reorderArr = []
    return
}


