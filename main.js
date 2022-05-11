
const body = document.querySelector('body');
const containerDiv = document.createElement('div');

body.appendChild(containerDiv);
containerDiv.setAttribute('class', 'container');

const container = document.querySelector('.container');



for(let i = 0; i < 16; i++) {

    const div = document.createElement('div');
    div.setAttribute('id', 'box-container' + i);
    container.appendChild(div);

    for(let j = 0; j < 16; j++) {

        const boxContainer = document.querySelector('#box-container' + i);
        const div = document.createElement('div');
        div.setAttribute('class', 'box');
        boxContainer.appendChild(div);
    }
}