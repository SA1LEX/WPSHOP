

 //создаем переменную для часов
let clock = document.querySelector('.clock');
//создаем событие DOMContentLoaded

// Создаем функцию полной загрузки
function loaded() {
    //то, что будет выполняться после задержки: добавляем body класс loaded
    document.body.classList.add('loaded');
    //убираем body класс loaded_hiding
    document.body.classList.remove('loaded_hiding');
    //добавляем часам класс clockHide
    clock.classList.add('clockHide');
    //убираем у часов класс clockShow
    clock.classList.remove('clockShow');
}

// Создаем функцию начала загрузки
function start() {
    //добавляем body класс loaded_hiding
    document.body.classList.add('loaded_hiding');
    //добавляем часам класс clockShow
    clock.classList.add('clockShow');
    // Используем setTimeout для вызова функции loaded с задержкой
    //у нас это 3000 миллисекунд или 3 секунды
    setTimeout(loaded, 3000);
}

// Обрабатываем событие 'DOMContentLoaded', вызывая функцию start
document.addEventListener('DOMContentLoaded', start);

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();