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






StarImg1.addEventListener('click', function() {
    StarImg1.src="./img/Star.png"
    StarImg1.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
    })
})
StarImg2.addEventListener('click', function() {
    StarImg1.src="./img/Star.png"
    StarImg2.src="./img/Star.png"
    StarImg1.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
    })
    StarImg2.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
    })
})
StarImg3.addEventListener('click', function() {
    StarImg1.src="./img/Star.png"
    StarImg2.src="./img/Star.png"
    StarImg3.src="./img/Star.png"
    StarImg1.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
    })
    StarImg2.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
    })
    StarImg3.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
        StarImg3.src="./img/Star.png"
    })
})
StarImg4.addEventListener('click', function() {
    StarImg1.src="./img/Star.png"
    StarImg2.src="./img/Star.png"
    StarImg3.src="./img/Star.png"
    StarImg4.src="./img/Star.png"
    StarImg1.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
    })
    StarImg2.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
    })
    StarImg3.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
        StarImg3.src="./img/Star.png"
    })
    StarImg4.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
        StarImg3.src="./img/Star.png"
        StarImg4.src="./img/Star.png"
    })
})
StarImg5.addEventListener('click', function() {
    StarImg1.src="./img/Star.png"
    StarImg2.src="./img/Star.png"
    StarImg3.src="./img/Star.png"
    StarImg4.src="./img/Star.png"
    StarImg5.src="./img/Star.png"
    StarImg1.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
    })
    StarImg2.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
    })
    StarImg3.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
        StarImg3.src="./img/Star.png"
    })
    StarImg4.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
        StarImg3.src="./img/Star.png"
        StarImg4.src="./img/Star.png"
    })
    StarImg5.addEventListener('mouseout', function() {
        StarImg1.src="./img/Star.png"
        StarImg2.src="./img/Star.png"
        StarImg3.src="./img/Star.png"
        StarImg4.src="./img/Star.png"
        StarImg5.src="./img/Star.png"
    })
})