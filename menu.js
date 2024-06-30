let headerMenu = document.querySelector('.header__menu');
let allMenu = document.querySelector('.all__menu');
let menu = document.querySelector('.menu');
headerMenu.addEventListener('click', function() {
    if(menu.className==='menu') {
        menu.classList.add('new')
        headerMenu.classList.add('rotate')
        headerMenu.src='./img/pngwing.comыаыаыва.png'
        /* headerMenu.src = "./img/pngwing.com (13).png" */
        /* headerMenu.style.transform = "rotate(360deg)"; */
        /* menu.style.zIndex = '90' */
    }
    else {
        menu.classList.remove('new')
        headerMenu.classList.remove('rotate')
        headerMenu.src='./img/pngwing.com (13).png'
        /* headerMenu.src = './img/pngwing.comыаыаыва' */
        /* menu.style.zIndex = '80' */
    }
})