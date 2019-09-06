function classToggle() {
  const navs = document.querySelectorAll('.menu')
  navs.forEach(nav => nav.classList.toggle('menu-toggleShow'));
}

document.querySelector('.menu-toggle')
    .addEventListener('click', classToggle);