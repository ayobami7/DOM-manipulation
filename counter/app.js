const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);
// set initial count
let count = 0;

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
    const styles = e.currentTarget.classList;
        if (styles.contains("btn-decrease")) {
            count--;
        } else if (styles.contains('btn-increase')) {
            count++;
        } else {
            count = 0; 
        }

        if(count < 0){
            value.style.color = "red"
        }
        if(count > 0){
            value.style.color = "green"
        }
        if(count === 0){
            value.style.color = "#063970"
        }

        value.textContent = count;
    });
});