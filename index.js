const paragraph = document.getElementById('text');
const button = document.getElementById('button');
let currentText = 0;


button.addEventListener('click', function() {
    if (currentText === 0) {
        paragraph.textContent = 'Text has been changed dynamically!';
     currentText = 1;   
    } else {
        paragraph.textContent = 'Text has changed again!';
        currentText = 0;
    }
});