const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const colors = ["green","red","rgba(132, 122, 120)", "azure","aqua", "beige","chartreuse","darksalmon"]

btn.addEventListener("click", function(){
    const randomNumber = getRandomNUmber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color=colors[randomNumber];
});

function getRandomNUmber(){
    return Math.floor(Math.random() * colors.length);
}