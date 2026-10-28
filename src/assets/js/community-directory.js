(function () {
  var resources = window.INTELEX_RESOURCES || [];
  var programs = window.INTELEX_PROGRAMS || [];
  var resourceList = document.querySelector("[data-resource-list]");
  var programList = document.querySelector("[data-program-list]");
  var empty = document.querySelector("[data-resource-empty]");
  var clearButton = document.querySelector("[data-resource-clear]");
  var audienceCards = Array.prototype.slice.call(document.querySelectorAll("[data-audience]"));
  var activeAudience = "all";

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function syncCards() {
    audienceCards.forEach(function (card) {
      card.classList.toggle("is-active", card.dataset.audience === activeAudience);
    });
  }

  function renderResource(resource) {
    var article = document.createElement("article");
    var action = resource.verified && resource.url
      ? '<a class="button button--primary button--small" href="' + escapeHtml(resource.url) + '">Tải tài nguyên</a>'
      : '<span class="status-pill">Đang biên soạn</span>';

    article.className = "resource-item";
    article.innerHTML = [
      '<div class="resource-item__main">',
      '<span class="resource-item__type">' + escapeHtml(resource.type) + "</span>",
      "<h3>" + escapeHtml(resource.title) + "</h3>",
      "<p>Lab liên quan: " + escapeHtml(resource.labId || "Chưa gắn Lab") + "</p>",
      "</div>",
      '<dl class="resource-item__meta">',
      "<div><dt>Ngôn ngữ</dt><dd>" + escapeHtml(resource.language) + "</dd></div>",
      "<div><dt>Thời lượng</dt><dd>" + escapeHtml(resource.duration) + "</dd></div>",
      "<div><dt>Mức độ</dt><dd>" + escapeHtml(resource.level) + "</dd></div>",
      "<div><dt>Dung lượng</dt><dd>" + escapeHtml(resource.size) + "</dd></div>",
      "</dl>",
      '<div class="resource-item__action">' + action + "</div>"
    ].join("");

    return article;
  }

  function renderResources() {
    if (!resourceList) {
      return;
    }

    var matches = resources.filter(function (resource) {
      return activeAudience === "all" || (resource.audience || []).indexOf(activeAudience) !== -1;
    });

    syncCards();
    resourceList.replaceChildren();
    matches.forEach(function (resource) {
      resourceList.appendChild(renderResource(resource));
    });

    if (empty) {
      empty.hidden = matches.length > 0;
    }
  }

  function renderPrograms() {
    if (!programList) {
      return;
    }

    programList.replaceChildren();
    programs.forEach(function (program) {
      var article = document.createElement("article");
      var action = program.officialUrl
        ? '<a class="button button--primary button--small" href="' + escapeHtml(program.officialUrl) + '">Tìm hiểu</a>'
        : '<span class="button button--secondary button--small" aria-disabled="true">Tìm hiểu</span>';

      article.className = "program-row";
      article.innerHTML = [
        '<span class="program-row__id">' + escapeHtml(program.id) + "</span>",
        "<div>",
        "<h3>" + escapeHtml(program.title) + "</h3>",
        "<p>" + escapeHtml(program.description) + "</p>",
        "</div>",
        '<div class="program-row__status">',
        '<span class="status-pill">' + escapeHtml(program.status) + "</span>",
        action,
        "</div>"
      ].join("");

      programList.appendChild(article);
    });
  }

  audienceCards.forEach(function (card) {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.addEventListener("click", function () {
      activeAudience = card.dataset.audience || "all";
      renderResources();
    });

    card.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      activeAudience = card.dataset.audience || "all";
      renderResources();
    });
  });

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      activeAudience = "all";
      renderResources();
    });
  }

  renderResources();
  renderPrograms();
})();
