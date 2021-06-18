// throttle
function throttle(fn, delay = 100) {
  let timer = null;

  return function() {
    if(!timer) {
      timer = setTimeout(() => {
        fn.apple(this, arguments); // this 指向 ？？
        timer = null;
      }, delay);
    }
  }
}
// debounce
function debounce(fn, delay = 300) {
  let timer = null;

  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments); //
      timer = null;
    }, delay);
  }
}
