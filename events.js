console.log('js file');

const makeLightBlue = document.getElementById('make-lightblue');
makeLightBlue.onclick = backgroundBlue;

function backgroundBlue() {
    document.body.style.backgroundColor = 'lightBlue';
}


