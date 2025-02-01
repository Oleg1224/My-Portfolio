window.onload = function() {
    let betaBgraund = document.querySelector('.beta_bgraund');
    setTimeout(function() {
        betaBgraund.style.transform='scale(0)'
    }, 20000)
}
let betaButton = document.querySelector('.beta_button');
betaButton.addEventListener('click', function() {
    let betaBgraund = document.querySelector('.beta_bgraund');
    betaBgraund.style.transform='scale(0)'
})