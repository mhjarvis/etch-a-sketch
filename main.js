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

// Add button element to document
wrapperDiv.appendChild(btn);
btn.setAttribute('class', 'btn');
btn.innerHTML = "Update";

body.appendChild(wrapperDiv);                           //add wrapper to DOM
wrapperDiv.setAttribute('class', 'wrapper');            //add class to wrapper



const wrapper = document.querySelector(".wrapper");     //select wrapper class tag
wrapper.appendChild(containerDiv);                      //add container to DOM
containerDiv.setAttribute('class', 'container');        //add container class

const container = document.querySelector('.container');

let boardSize = 30;

// Loop through and create board
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

colorChange();

// Function to add event listener upon 'mouseover' to update color
function colorChange() {
    
    let divMatches = document.getElementsByClassName('box');

    for(let i = 0; i < divMatches.length; i++) {
        divMatches.item(i).addEventListener("mouseover", () => {
            divMatches.item(i).classList.add('changeToGray');
        });
    }
}