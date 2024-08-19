let text2 = document.querySelector('.text2');
textsButtonOleg.addEventListener('click', function() {
    if(text2.className==='text2') {
        text2.classList.add('texts')
    }
    else {
        text2.classList.remove('texts')
    }
})