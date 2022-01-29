const mainfunc = () => {

    window.onload = function () {
        jQuery("#user-city").text(ymaps.geolocation.city);
        jQuery("#user-city2").text(ymaps.geolocation.city);
    }
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween:70,
    centeredSlides:true,
    slideToClickedSlide:true,
    toggle:true,
    breakpoint:{
        320:{
            slidesPerView:1
        },
        891: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1200: {
              slidesPerView: 3,
              spaceBetween: 70
            }
    }
  });
  const modal__window = document.querySelector('.modal');
const body = document.querySelector('body');
const modal__btn = document.querySelector('.main-display__button');

modal__btn.addEventListener('click', () => {
  modal__window.classList.add('active');
  body.classList.add('lock');
});

modal__window.addEventListener('click', (e) => {
  const is__modal = e.target.closest('.modal__inner');
  if (!is__modal) {
    modal__window.classList.remove('active');
    body.classList.remove('lock');
  }
})

document.addEventListener('keyup', (e) => {
  if(e.code === "Escape") {
    modal__window.classList.remove('active');
    body.classList.remove('lock');
  }
})

}

mainfunc();
