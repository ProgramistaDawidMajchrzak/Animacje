const leftStock = document.querySelector('.left-stock');
const middleStock = document.querySelector('.middle-stock');
const rightStock = document.querySelector('.right-stock');

const stockAnimation = () => {
    leftStock.classList.add('left-stock-animation');
    middleStock.classList.add('middle-stock-animation');
    rightStock.classList.add('right-stock-animation');
}
const stockAnimationRemove = () => {
    leftStock.classList.remove('left-stock-animation');
    middleStock.classList.remove('middle-stock-animation');
    rightStock.classList.remove('right-stock-animation');
}
setInterval(stockAnimation, 2000);
setInterval(stockAnimationRemove, 4000);