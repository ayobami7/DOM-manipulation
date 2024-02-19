
let links = document.querySelector('.links');
let navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
    navToggle.classList.toggle('show-links');
});