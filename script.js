const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true ,
    speed: 600   ,
    spaceBetween: 0,
    watchSlidesProgress: true,
    hashNavigation: true,
    slidesPerGroup: 1,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,        
      },
  
    breakpoints: {

      767: {
        slidesPerView: 1,
        spaceBetween: 25,
        slidesPerGroup: 1,
      },
    }
  
});


//Таймер

var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  initializeClock('countdown', deadline);

// Скролл

const form = document.querySelector('.form-block')
const buttons = document.querySelectorAll('.scroll-btn')

function scrollTo(el) {
    window.scroll({
        left:0,
        top:el.offsetTop,
        behavior:'smooth'
    })
}

for (const btn of buttons) {
    btn.addEventListener('click', () => {
        scrollTo(form)
    })
}