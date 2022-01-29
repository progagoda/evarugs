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
        }
    }
  });