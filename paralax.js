/* let leaf1 = document.querySelector('.leaf1');
let leaf2 = document.querySelector('.leaf2');
let leaf3 = document.querySelector('.leaf3');
let leaf4 = document.querySelector('.leaf4');
let leaf5 = document.querySelector('.leaf5'); */
let paralax = document.querySelectorAll('.paralax');
let paralaxTwo = document.querySelectorAll('.paralaxTwo');
let paralaxThre = document.querySelector('.paralaxThre');
window.addEventListener('mousemove', function(event) {
    let x = event.offsetX
    let y = event.offsetY
    paralax[0].style.transform = `translate(${-x/80}px, ${-y/80}px) rotate(${100}deg)`
    paralax[1].style.transform = `translate(${-x/80}px, ${-y/80}px) rotate(${-100}deg)`
    paralax[5].style.transform = `translate(${-x/80}px, ${-y/80}px)`
    paralax[9].style.transform = `translate(${-x/80}px, ${-y/80}px) rotate(${180}deg)`
    paralax[2].style.transform = `translate(${x/120}px, ${y/120}px)`
    paralax[3].style.transform = `translate(${x/120}px, ${y/120}px)`
    paralax[4].style.transform = `translate(${x/120}px, ${y/120}px) rotate(${120}deg)`
    paralax[6].style.transform = `translate(${x/120}px, ${y/120}px) rotate(${90}deg)`
    paralax[7].style.transform = `translate(${x/120}px, ${y/120}px)`
    paralax[8].style.transform = `translate(${x/120}px, ${y/120}px)`
    /* for(let i = 0; i<paralax.length; i++) {
        let allParalax = paralax[i]
        allParalax.style.transform = `translate(${-x/80}px, ${-y/80}px)`
    }
    for(let j = 0; j<paralaxTwo.length; j++) {
        let allParalaxTwo = paralaxTwo[j]
        allParalaxTwo.style.transform = `translate(${x/120}px, ${y/120}px)`
    } */
})