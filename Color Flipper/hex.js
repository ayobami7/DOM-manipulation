const btn = document.getElementById("btn");
const color = document.querySelector('.color');

const hex = ["0","1","2","3","4","5","6",'7','8','9','a','b','c','d','e','f'];


btn.addEventListener("click", function(){
    let hexColor = "#"
    for(let i= 0; i<6; i++){
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    color.innerHTML = hexColor;
    color.style.color=hexColor;
    document.body.style.backgroundColor = hexColor;
});