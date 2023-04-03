const button = document.querySelector('button');

// button.onclick = () = {
//     alert('alert');
// }

const buttonClickHandler = event => {
    event.target.disabled = true;
    console.log(event);
}

const anotherButtonClickHandler = () => {
    console.log('this was clicked');
}

// button.onclick = buttonClickHandler;

button.addEventListener('click', buttonClickHandler);

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
}, 2000);