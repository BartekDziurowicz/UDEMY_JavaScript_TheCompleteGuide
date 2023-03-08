const addMovieModal = document.getElementById('add-modal');
// other approachs:
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// other approachs:
// const startAddMovieButton = document.header.child[1];
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
}
// function toogleMovieModal () {}; or anonymous function can be used as well

startAddMovieButton.addEventListener('click', toggleMovieModal);