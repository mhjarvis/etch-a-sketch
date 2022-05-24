// Create container div
const body = document.querySelector('body');            //select body tag
const wrapperDiv = document.createElement('div');       //create wrapper div
const containerDiv = document.createElement('div');     //create container div
const btn = document.createElement('button');
const h1 = document.createElement('h1');

// Add title element to document
body.appendChild(h1);
h1.setAttribute('class', 'title');
h1.innerHTML = "Etch-A-Sketch";

body.appendChild(wrapperDiv);                           //add wrapper to DOM
wrapperDiv.setAttribute('class', 'wrapper');            //add class to wrapper

const wrapper = document.querySelector(".wrapper");     //select wrapper class tag
wrapper.appendChild(containerDiv);                      //add container to DOM
containerDiv.setAttribute('class', 'container');        //add container class

const container = document.querySelector('.container');

let boardSize = 30;

// Loop through and create board

createBoard();
form();
colorChange();

// Function to create board with grid squares
function createBoard() {
    for(let i = 0; i < boardSize; i++) {

        const div = document.createElement('div');
        div.setAttribute('id', 'box-container' + i);
        div.setAttribute('class', 'box-column');
        container.appendChild(div);
    
        for(let j = 0; j < boardSize; j++) {
    
            const boxContainer = document.querySelector('#box-container' + i);
            const div = document.createElement('div');
            div.setAttribute('class', 'box');
            boxContainer.appendChild(div);
        }
    }
}

// Function to add event listener upon 'mouseover' to update color
function colorChange() {
    
    let divMatches = document.getElementsByClassName('box');

    for(let i = 0; i < divMatches.length; i++) {
        divMatches.item(i).addEventListener("mouseover", () => {
            divMatches.item(i).classList.add('changeToGray');
        });
    }
}

// Function to build form for updating the number of grid squares
function form() {
    const div = document.createElement('div');
    const form = document.createElement('form');
    const input = document.createElement('input');

    wrapperDiv.appendChild(div);
    div.setAttribute('class', 'form-container');

    const formContainer = document.querySelector('.form-container');
    formContainer.appendChild(form);
    form.setAttribute('class', 'main-form');

    //const mainForm = document.querySelector('.main-form');
    formContainer.appendChild(input);
    input.setAttribute('class', 'form-imput');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', '16');
    input.setAttribute('name', 'gridSquare');

    // Add button element to document
    formContainer.appendChild(btn);
    btn.setAttribute('class', 'btn');
    btn.innerHTML = "Update";
}