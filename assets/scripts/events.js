const button = document.querySelector('button');

// button.onclick = () = {
//     alert('alert');
// }

const buttonClickHandler = () => {
    alert('button was clicked');
}

const anotherButtonClickHandler = () => {
    console.log('this was clicked');
}

// button.onclick = buttonClickHandler;

button.addEventListener('click', buttonClickHandler);

setTimeout(() => {
    button.removeEventListener('click', buttonClickHandler);
}, 2000);