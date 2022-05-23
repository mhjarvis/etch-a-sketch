// Create container div
const body = document.querySelector('body');            //select body tag
const wrapperDiv = document.createElement('div');       //create wrapper div
const containerDiv = document.createElement('div');     //create container div

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


function colorChange() {
    
    let divMatches = document.getElementsByClassName('box');
    //console.log(divMatches);

    for(let i = 0; i < divMatches.length; i++) {
        divMatches.item(i).addEventListener("mouseover", () => {
            divMatches.item(i).classList.add('changeToGray');
        });
    }
}