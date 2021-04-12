
const stalk = document.querySelector('.stalk');
const LeftTopLeaf = document.querySelector('.left-top-leaf');
const LeftBottomLeaf = document.querySelector('.left-bottom-leaf');
const RightTopLeaf = document.querySelector('.right-top-leaf');
const RightBottomLeaf = document.querySelector('.right-bottom-leaf');

const PlantAnimation = () => {
    stalk.classList.add('stalk-animation')
    LeftTopLeaf.classList.add('left-top-leaf-animation')
    LeftBottomLeaf.classList.add('left-bottom-leaf-animation')
    RightTopLeaf.classList.add('right-top-leaf-animation')
    RightBottomLeaf.classList.add('right-bottom-leaf-animation')
}
const PlantAnimationRemove = () => {
    stalk.classList.remove('stalk-animation')
    LeftTopLeaf.classList.remove('left-top-leaf-animation')
    LeftBottomLeaf.classList.remove('left-bottom-leaf-animation')
    RightTopLeaf.classList.remove('right-top-leaf-animation')
    RightBottomLeaf.classList.remove('right-bottom-leaf-animation')
}

setInterval(PlantAnimation, 2000)
setInterval(PlantAnimationRemove, 4000)