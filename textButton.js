let MobileText = document.querySelector('.Mobile_text');
let textsButtonOleg = document.querySelector('.texts__buttonOleg');
textsButtonOleg.addEventListener('click', function() {
    if (MobileText.className==='Mobile_text') {
        MobileText.classList.add('text');
    } else {
        MobileText.classList.remove('text');
    }
});