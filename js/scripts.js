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
  })
  .catch(function(err) {
    console.log('Failed to fetch page: ', err);
  });