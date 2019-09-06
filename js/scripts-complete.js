function classToggle() {
  const navs = document.querySelectorAll('.menu')
  navs.forEach(nav => nav.classList.toggle('menu-toggleShow'));
}

const fileUrl = '../banner.html';

fetch(fileUrl)
  .then(function(response) {
    return response.text();
  })
  .then(function(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, "text/html");
    var headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(doc.querySelector('.header'));
    var hamburglar = document.querySelector('.menu-toggle');
    console.log("loaded: " + hamburglar);
    document.querySelector('.menu-toggle')
        .addEventListener('click', classToggle)
  })
  .catch(function(err) {
    console.log('Failed to fetch page: ', err);
  });
