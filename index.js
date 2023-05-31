
var button = document.querySelector('.nav-button');
var items = document.querySelector('.nav-items');
var link = document.getElementsByTagName('a href');

button.addEventListener('click', function() {
  items.classList.toggle('opened');
}, false);

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function(e) {
    e.preventDefault();
    items.classList.remove('opened');
  }, false);
}

var closeBtn = document.getElementById("closeBtn");
var popup = document.getElementById("popup");
closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});