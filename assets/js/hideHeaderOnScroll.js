const header = document.querySelector('header');
let prevScrollPos = window.scrollY;
let isHeaderVisible = true;

function handleScroll() {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos < 50) {
    header.style.top = '0';
    header.style.transition = "0.6s"
    isHeaderVisible = true;
  } else if (prevScrollPos < currentScrollPos && isHeaderVisible) {
    header.style.top = `-${header.offsetHeight}px`;
    isHeaderVisible = false;
  } else if (prevScrollPos > currentScrollPos && !isHeaderVisible) {
    header.style.top = '0';
    header.style.transition = "0.6s"
    isHeaderVisible = true;
  }

  prevScrollPos = currentScrollPos;
  requestAnimationFrame(handleScroll);
}

window.addEventListener('scroll', handleScroll);