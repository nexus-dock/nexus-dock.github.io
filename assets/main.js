

var links = document.querySelectorAll('.doc-nav a');
var sections = document.querySelectorAll('.doc-body section');
var current = 0;
links.forEach((link,ix) => {
    link.addEventListener("click", function(){
sections[current].classList.remove('active');
sections[ix].classList.add('active');
current = ix;
    });
})