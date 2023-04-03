const button = document.querySelector('button');

// button.onclick = () = {
//     alert('alert');
// }

// const buttonClickHandler = event => {
//     event.target.disabled = true;
//     console.log(event);
// }

// const anotherButtonClickHandler = () => {
//     console.log('this was clicked');
// }

// // button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault(); // prevent default behaviour, now page is not reloaded after submit button is clicked
    console.log(event);
})

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
})

button.addEventListener('click', event => { ////any other listeners for the same type of event on some ancesor alements will not be triggered
    event.stopPropagation
    console.log('CLICKED BUTTON');
    console.log(event);
})

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

list.addEventListener('click', event => {

    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');;
})