(function () {
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navLinks = document.querySelectorAll("[data-nav-link]");
  var currentPage = document.body.dataset.page;

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var pageMatches = {
    home: "Khám phá",
    labs: "Labs",
    projects: "Dự án",
    community: "Cộng đồng",
    about: "Về Intelex"
  };

  navLinks.forEach(function (link) {
    var href = link.getAttribute("href") || "";
    var label = link.textContent.trim();
    var isCurrent = pageMatches[currentPage] === label;

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
