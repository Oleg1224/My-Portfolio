let headerUser = document.querySelector('.header__user');
let userWindow = document.querySelector('.user__window');
headerUser.addEventListener('click', function() {
    if(userWindow.className==='user__window') {
        userWindow.classList.add('new')
    }
    else {
        userWindow.classList.remove('new')
    }
})