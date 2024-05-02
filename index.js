const paragraph = document.getElementById('text');
const button = document.getElementById('button');


button.addEventListener('click', function() {

    paragraph.textContent = 'Text has been changed dynamically!';
});