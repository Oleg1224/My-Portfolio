let headerMenu = document.querySelector('.header__menu');
let allMenu = document.querySelector('.all__menu');
let menu = document.querySelector('.menu');
let menuBox = document.querySelector('.menu__box');
headerMenu.addEventListener('click', function() {
    if(menu.className==='menu') {
        menu.classList.add('new')
        headerMenu.classList.add('rotate')
        /* headerMenu.src='./img/pngwing.comыаыаыва.png' */
        headerMenu.src="./img/luxa.org-color-pngwing.com (1).png"
        /* headerMenu.src="./img/Белый крест.png" */
        menuBox.classList.add('top')
        /* headerMenu.style.transform = "rotate(360deg)"; */
        /* menu.style.zIndex = '90' */
    }
    else {
        menu.classList.remove('new')
        headerMenu.classList.remove('rotate')
        headerMenu.src='./img/pngwing.com (13).png'
        menuBox.classList.remove('top')
        /* headerMenu.src = './img/pngwing.comыаыаыва' */
        /* menu.style.zIndex = '80' */
    }
})