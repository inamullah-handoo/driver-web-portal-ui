dropdown = (e) => {
  if (e.parentNode.nextElementSibling.classList[1]) {
    e.parentNode.nextElementSibling.classList.remove('show-flex');
    e.children[0].classList.replace('fa-chevron-down', 'fa-chevron-right');
  } else {
    e.parentNode.nextElementSibling.classList.add('show-flex');
    e.children[0].classList.replace('fa-chevron-right', 'fa-chevron-down');
  }
}

dd = (e) => {
  if (e.nextElementSibling.children[1].classList[1]) {
    e.nextElementSibling.children[1].classList.remove('show-block');
    e.children[0].classList.replace('fa-chevron-down', 'fa-chevron-right');
  } else {
    e.nextElementSibling.children[1].classList.add('show-block');
    e.children[0].classList.replace('fa-chevron-right', 'fa-chevron-down');
  }
}

gotoUrl = (e, url) => {
  e.preventDefault();
  window.location.assign(url);
}