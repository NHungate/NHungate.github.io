const $toggleButton = document.querySelector('.nav-toggle');
const $navMenu = document.querySelector('.nav-menu');

$toggleButton.onclick = (e) => {
  $toggleButton.classList.toggle('is-active');
  $navMenu.classList.toggle('is-active');
};

$navMenu.onclick = (e) => {
  $toggleButton.classList.remove('is-active');
  $navMenu.classList.remove('is-active');
};
