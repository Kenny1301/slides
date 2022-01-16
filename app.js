//создаем переменную const  для получения слайдов через селектор
const slides = document.querySelectorAll('.slide')
//через цикл for проходим через каждый слайд
for (const slide of slides) {
    slide.addEventListener('click', () => {//создаем слушатель событий
        clearActiveClasses() //уберает активность с предыдущего слайда
        slide.classList.add('active')//включение анимации на слайде
    })
}

function clearActiveClasses() {//функция удаления активности со слайда
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}