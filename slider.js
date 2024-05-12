const colors = ['./img/1647941800_3-abrakadabra-fun-p-paporotnik-na-chernom-fone-3.jpg', './img/1643269638_7-abrakadabra-fun-p-kirpichnaya-stena-nochyu-9.jpg', './img/364167.jpg'];
let slide = document.querySelectorAll('.slide');
let slider = document.querySelector('.slider');
let leftImg = document.querySelector('.left__img');
let rightImg = document.querySelector('.right__img');
let checkIndex = 0;
function colorChange(all) {
    document.body.style.backgroundImage = `url(${colors[all]})`
}
function replit() {
    colorChange(checkIndex)
}
function showSlide(show) {
    slider.style.transform = `translateX(-${show*100}%)`
}
function leftAndRight(bias) {
    if(bias==='next') {
        checkIndex=(checkIndex+1)%slide.length
    }
    else {
        checkIndex=(checkIndex-1+slide.length)%slide.length
    }
}
leftImg.addEventListener('click', function() {
    leftAndRight('prev')
    showSlide(checkIndex)
    replit(checkIndex)
})
rightImg.addEventListener('click', function() {
    leftAndRight('next')
    showSlide(checkIndex)
    replit(checkIndex)
})