'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const showPage = function (name) {
  for (let i = 0; i < pages.length; i++) {
    if (name === pages[i].dataset.page) {
      pages[i].classList.add("active");
      navigationLinks[i].classList.add("active");
      window.scrollTo(0, 0);
    } else {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
  }
};

// add event to all nav link; remember the page in the URL hash so a refresh keeps it
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const name = this.innerHTML.toLowerCase();
    history.replaceState(null, "", "#" + name);
    showPage(name);
  });
}

const initialPage = location.hash.slice(1).toLowerCase();
if (initialPage && document.querySelector('[data-page="' + initialPage + '"]')) showPage(initialPage);