let StarImg1 = document.querySelector('.star__img1');
let StarImg2 = document.querySelector('.star__img2');
let StarImg3 = document.querySelector('.star__img3');
let StarImg4 = document.querySelector('.star__img4');
let StarImg5 = document.querySelector('.star__img5');
StarImg1.addEventListener('mouseover', function() {
    StarImg1.src="./img/Star.png"
})
StarImg1.addEventListener('mouseout', function() {
    StarImg1.src="./img/StarNotFull.png"
})
StarImg2.addEventListener('mouseover', function() {
    StarImg1.src="./img/Star.png"
    StarImg2.src="./img/Star.png"
})
StarImg2.addEventListener('mouseout', function() {
    StarImg1.src="./img/StarNotFull.png"
    StarImg2.src="./img/StarNotFull.png"
})
StarImg3.addEventListener('mouseover', function() {
    StarImg1.src="./img/Star.png"
    StarImg2.src="./img/Star.png"
    StarImg3.src="./img/Star.png"
})
StarImg3.addEventListener('mouseout', function() {
    StarImg1.src="./img/StarNotFull.png"
    StarImg2.src="./img/StarNotFull.png"
    StarImg3.src="./img/StarNotFull.png"
})
StarImg4.addEventListener('mouseover', function() {
    StarImg1.src="./img/Star.png"
    StarImg2.src="./img/Star.png"
    StarImg3.src="./img/Star.png"
    StarImg4.src="./img/Star.png"
})
StarImg4.addEventListener('mouseout', function() {
    StarImg1.src="./img/StarNotFull.png"
    StarImg2.src="./img/StarNotFull.png"
    StarImg3.src="./img/StarNotFull.png"
    StarImg4.src="./img/StarNotFull.png"
})
StarImg5.addEventListener('mouseover', function() {
    StarImg1.src="./img/Star.png"
    StarImg2.src="./img/Star.png"
    StarImg3.src="./img/Star.png"
    StarImg4.src="./img/Star.png"
    StarImg5.src="./img/Star.png"
})
StarImg5.addEventListener('mouseout', function() {
    StarImg1.src="./img/StarNotFull.png"
    StarImg2.src="./img/StarNotFull.png"
    StarImg3.src="./img/StarNotFull.png"
    StarImg4.src="./img/StarNotFull.png"
    StarImg5.src="./img/StarNotFull.png"
})
/* let StarImg1Src = StarImg1.src;
let StarImg2Src = StarImg2.src;
let StarImg3Src = StarImg3.src;
let StarImg4Src = StarImg4.src;
let StarImg5Src = StarImg5.src;
let newSrc = "./img/Star.png"; */
let StarImg1Src = StarImg1.src;
let StarImg2Src = StarImg2.src;
let StarImg3Src = StarImg3.src;
let StarImg4Src = StarImg4.src;
let StarImg5Src = StarImg5.src;
/* StarImg1.addEventListener('click', function() {
    if(StarImg1.src===StarImg1Src) {
        StarImg1.src=newSrc
    }
    else {
        StarImg1.src=StarImg1Src
    }
})
StarImg2.addEventListener('click', function() {
    if(StarImg1.src===StarImg1Src && StarImg2.src===StarImg2Src) {
        StarImg1.src=newSrc
        StarImg2.src=newSrc
    }
    else {
        StarImg1.src=StarImg1Src
        StarImg2.src=StarImg2Src
    }
}) */
StarImg1.addEventListener('click', function() {
    if (StarImg1.src.endsWith(StarImg1Src)) {
        StarImg1.src = newSrc;
    } else {
        StarImg1.src = StarImg1Src;
    }
});
