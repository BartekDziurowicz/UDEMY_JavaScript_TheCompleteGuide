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