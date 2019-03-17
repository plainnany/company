
window.onload = function () {
  let prev = document.querySelector('#prev'),
    next = document.querySelector('#next'),
    oSlide = document.querySelector('#slide'),
    slide = document.querySelector('.slide'),
    menuLi = document.querySelectorAll('.pagination>li');
  
  const timeout = 2000;
  let index = 0;
  let w = oSlide.offsetWidth;
  let timer = null;
  window.onresize = function () {
    w = oSlide.offsetWidth;
    slide.style.transform = 'translate(' + (-w * index) + 'px)';
  };

  function play() {
    index++;
    if (index === 3) {
      index = 0;
    }
    slide.style.transform = 'translate(' + (-w * index) + 'px)';

    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].className = '';
    }
    menuLi[index].className = 'active';
  }
  next.addEventListener('click', function () {
    clearInterval(timer);
    play();
  });

  prev.addEventListener('click', function () {
    clearInterval(timer);
    index--;
    if (index === -1) {
      index = 2;
    }
    slide.style.transform = 'translate(' + (-w * index) + 'px)';

    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].className = ''
    }
    menuLi[index].className = 'active';
  });

  for (let i = 0; i < menuLi.length; i++) {
    menuLi[i].num = i;
    menuLi[i].onclick = function () {
      index = this.num;
      for (let i = 0; i < menuLi.length; i++) {
        menuLi[i].className = ''
      }
      this.className = 'active';
      slide.style.transform = 'translate(' + (-w * index) + 'px)';
    };
  }
  oSlide.addEventListener('mouseover', function () {
    clearInterval(timer);
  })
  oSlide.addEventListener('mouseout', function () {
    clearInterval(timer);
    timer = setInterval(play, timeout);
  })
  timer = setInterval(play, timeout);

  const nav_bar = document.querySelector('.nav_bar')
  const menu = document.querySelector('.menu')
  nav_bar.addEventListener('click', function(){
    if (menu.className.indexOf('active') > -1) {
      menu.classList.remove('active')
    } else {
      menu.classList.add('active')
    }
  })
}