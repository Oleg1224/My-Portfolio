document.addEventListener("DOMContentLoaded", function() {
    let StarImg = document.querySelectorAll('.star__img');
StarImg.addEventListener("mouseover", function() {
    StarImg.src = "./img/Star.png";
});
StarImg.addEventListener("mouseout", function() {
    StarImg.src = "./img/Star.png";
});
})