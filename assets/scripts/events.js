const button = document.querySelector('button');

// button.onclick = () = {
//     alert('alert');
// }

const buttonClickHandler = () => {
    alert('button was clicked');
}

button.onclick = buttonClickHandler;