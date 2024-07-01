let progectImg1 = document.querySelector('.progect__img1');
let progectImg2 = document.querySelector('.progect__img2');
let progectImg3 = document.querySelector('.progect__img3');
let progectImg4 = document.querySelector('.progect__img4');
let progectImg5 = document.querySelector('.progect__img5');
let progectImg6 = document.querySelector('.progect__img6');
let progectSvg = document.querySelector('.progect__svg');
progectImg1.addEventListener('click', function() {
    window.location.href = 'https://oleg1224.github.io/Easyfest/'
})
progectImg2.addEventListener('click', function() {
    window.location.href = 'https://oleg1224.github.io/Polar/'
})
progectImg3.addEventListener('click', function() {
    window.location.href = 'https://oleg1224.github.io/SPIDER-BANK/'
})
progectImg4.addEventListener('click', function() {
    window.location.href = 'https://oleg1224.github.io/ThemeSlider/'
})
progectImg5.addEventListener('click', function() {
    window.location.href = 'https://oleg1224.github.io/LinkedTech/'
})
progectImg6.addEventListener('click', function() {
    window.location.href = './without adaptive.html'
})
progectSvg.addEventListener('click', function() {
    window.location.href = 'https://oleg1224.github.io/Summary/'
})
window.onload = function() {
    let blackWinodw = document.querySelector('.blackWindow')
    setTimeout(function() {
        blackWinodw.style.opacity = '0'
        blackWinodw.style.zIndex = '-1'
    }, 500)
}