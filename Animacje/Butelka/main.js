const bottle = document.querySelector('.bottle img');
const flares = document.querySelector('.flares');

const bottleAnimation = () => {
    bottle.classList.toggle('bottleAppear');
    flares.classList.toggle('flaresAppear');
}
setInterval(bottleAnimation, 1750);