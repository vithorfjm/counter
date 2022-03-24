const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const span = document.querySelector('#number');

decrease.addEventListener('click', () => {
    span.textContent -= 1;
});

reset.addEventListener('click', () => {
    span.textContent = 0;
})

increase.addEventListener('click', () => {
    span.textContent = Number(span.textContent)+1;
});