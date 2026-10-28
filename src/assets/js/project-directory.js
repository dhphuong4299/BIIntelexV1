(function () {
  var projects = window.INTELEX_PROJECTS || [];
  var directory = document.querySelector("[data-project-directory]");
  var empty = document.querySelector("[data-project-empty]");
  var count = document.querySelector("[data-project-result-count]");
  var clearButton = document.querySelector("[data-project-clear]");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-domain]"));

  if (!directory) {
    return;
  }

  var domainLabels = {
    ai: "AI",
    data: "Data",
    iot: "IoT",
    automation: "Automation"
  };

  var params = new URLSearchParams(window.location.search);
  var activeDomain = params.get("domain") || "all";

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function syncControls() {
    filterButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.domain === activeDomain);
    });
  }

  function updateUrl() {
    var nextParams = new URLSearchParams();
    if (activeDomain !== "all") {
      nextParams.set("domain", activeDomain);
    }

    var nextUrl = window.location.pathname + (nextParams.toString() ? "?" + nextParams.toString() : "");
    window.history.pushState({ domain: activeDomain }, "", nextUrl);
  }

  function renderProject(project) {
    var article = document.createElement("article");
    var domains = (project.domains || [])
      .map(function (domain) {
        return '<span class="status-pill">' + escapeHtml(domainLabels[domain] || domain) + "</span>";
      })
      .join("");
    var relatedLabs = (project.relatedLabs || []).length
      ? project.relatedLabs
          .map(function (lab) {
            return '<a href="' + escapeHtml(lab.href) + '">' + escapeHtml(lab.label) + "</a>";
          })
          .join("")
      : '<span class="project-card__muted">Chưa có Lab public để liên kết trực tiếp</span>';

    article.className = "project-card";
    article.id = project.id.toLowerCase();
    article.innerHTML = [
      '<img class="project-card__image" src="' + escapeHtml(project.coverAsset) + '" alt="' + escapeHtml(project.name) + ' minh họa R&D" loading="lazy">',
      '<div class="project-card__content">',
      '<div class="project-card__topline">',
      '<span class="project-card__id">' + escapeHtml(project.id) + "</span>",
      '<div class="project-card__domains">' + domains + "</div>",
      "</div>",
      "<h3>" + escapeHtml(project.name) + "</h3>",
      '<dl class="project-card__facts">',
      "<div><dt>Bài toán</dt><dd>" + escapeHtml(project.problem) + "</dd></div>",
      "<div><dt>Vai trò nghiên cứu</dt><dd>" + escapeHtml(project.scope) + "</dd></div>",
      "<div><dt>Trạng thái</dt><dd>" + escapeHtml(project.verifiedStatus) + "</dd></div>",
      "<div><dt>Minh chứng</dt><dd>" + (project.evidence.length ? "Đã có minh chứng public" : "Chưa có minh chứng public") + "</dd></div>",
      "</dl>",
      '<div class="project-card__links">',
      relatedLabs,
      '<span>Cập nhật: ' + escapeHtml(project.updatedAt) + "</span>",
      "</div>",
      "</div>"
    ].join("");

    return article;
  }

  function render(options) {
    var matches = projects.filter(function (project) {
      return activeDomain === "all" || (project.domains || []).indexOf(activeDomain) !== -1;
    });

    syncControls();
    directory.replaceChildren();
    matches.forEach(function (project) {
      directory.appendChild(renderProject(project));
    });

    if (empty) {
      empty.hidden = matches.length > 0;
    }

    if (count) {
      count.textContent = matches.length + " / " + projects.length + " sáng kiến";
    }

    if (!options || options.updateUrl !== false) {
      updateUrl();
    }
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeDomain = button.dataset.domain || "all";
      render();
    });
  });

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      activeDomain = "all";
      render();
    });
  }

  window.addEventListener("popstate", function () {
    var nextParams = new URLSearchParams(window.location.search);
    activeDomain = nextParams.get("domain") || "all";
    render({ updateUrl: false });
  });

  render({ updateUrl: false });
})();
