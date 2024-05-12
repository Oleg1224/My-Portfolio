window.onload = function() {
    let black = document.querySelector('.black')
    setTimeout(function() {
        black.style.opacity = '0'
        black.style.zIndex = '-1'
    }, 500)
}