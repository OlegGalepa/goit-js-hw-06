


const value = document.querySelector("#value");
const BtnDecrement = document.querySelector('button[data-action="decrement"]');
const BtnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;


BtnDecrement.addEventListener("click", (handleClick) => {
    handleClick.preventDefault();
    counterValue--
    value.textContent = counterValue;
});

BtnIncrement.addEventListener("click", (handleClick) => {
    handleClick.preventDefault();
    counterValue++
    value.textContent = counterValue;
});