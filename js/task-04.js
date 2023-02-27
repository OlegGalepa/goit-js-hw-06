


const value = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;


btnDecrement.addEventListener("click", (handleClick) => {
    handleClick.preventDefault();
    counterValue--
    value.textContent = counterValue;
});

btnIncrement.addEventListener("click", (handleClick) => {
    handleClick.preventDefault();
    counterValue++
    value.textContent = counterValue;
});