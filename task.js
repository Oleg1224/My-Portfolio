// let task1 = document.querySelector('.task1');
// let task2 = document.querySelector('.task2');
// let task3 = document.querySelector('.task3');
// let task4 = document.querySelector('.task4');
// let task5 = document.querySelector('.task5');
// let task6 = document.querySelector('.task6');
// let task7 = document.querySelector('.task7');
// let task8 = document.querySelector('.task8');
// let task9 = document.querySelector('.task9');
// let task10 = document.querySelector('.task10');
// let task11 = document.querySelector('.task11');
// let task12 = document.querySelector('.task12');
// let task13 = document.querySelector('.task13');
// let task14 = document.querySelector('.task14');
// let tasks = document.querySelectorAll('.task');
// for(let i = 0; i<tasks.length; i++) {
//     tasks[i].addEventListener('click', function() {
//         let lefting = document.querySelector('.left__img');
//         let righting = document.querySelector('.right__img');
//         let headerMenu = document.querySelector('.header__menu');
//         let nextPageURL = this.getAttribute('href');
//         setTimeout(function() {
//             let black = document.querySelector('.black')
//             black.style.opacity = '1'
//             black.style.zIndex = '900'
//             lefting.style.display = 'none'
//             righting.style.display = 'none'
//             headerMenu.style.display = 'none'
//             window.location.href = nextPageURL
//         }, 500)
//     })
// }
let tasks = document.querySelectorAll('.task');

for (let i = 0; i < tasks.length; i++) {
    tasks[i].addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем стандартное действие ссылки

        let lefting = document.querySelector('.left__img');
        let righting = document.querySelector('.right__img');
        let headerMenu = document.querySelector('.header__menu');
        let nextPageURL = this.getAttribute('href');

        // Добавляем класс .fade-in, чтобы запустить анимацию
        let black = document.querySelector('.black');
        black.classList.add('fade-in');

        // Отложенное выполнение
        setTimeout(function() {
            lefting.style.display = 'none';
            righting.style.display = 'none';
            headerMenu.style.display = 'none';

            // Переход на следующую страницу после завершения анимации
            window.location.href = nextPageURL;
        }, 500);
    });
}

