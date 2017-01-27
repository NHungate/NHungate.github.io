const debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const adjustPadding = function() {
  const $header = document.querySelector('header > .section');
  const windowHeight = window.innerHeight;
  const headerComputedHeight = window.getComputedStyle($header, null).getPropertyValue('height');
  const headerHeight = Number.parseInt(headerComputedHeight, 10);

  $header.style.paddingTop = ((windowHeight - headerHeight) / 2) + 'px';
  $header.style.paddingBottom = ((windowHeight - headerHeight) / 2) + 'px';
};

const throttleAdjustPadding = debounce(adjustPadding, 200);

adjustPadding();
window.addEventListener('resize', throttleAdjustPadding);
