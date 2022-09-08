let header = document.getElementById('cabecalho');

window.addEventListener('scroll', function() { 
    if(window.scrollY > header.offsetHeight + 150){
        header.classList.add('light-header');
    } else {
        header.classList.remove('light-header');
    }
});