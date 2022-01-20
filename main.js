let counter = 0;
const counterElement = document.getElementById('counter');
const buttonIncrease = document.getElementById('increase');
const buttonDecrease = document.getElementById('decrease');

buttonIncrease.addEventListener('click', function(){
    counter++;
    counterElement.innerText = counter;
})

buttonDecrease.addEventListener('click', function(){
    counter--;
    counterElement.innerText = counter;
})