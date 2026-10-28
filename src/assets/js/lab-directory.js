(function () {
  var labs = window.INTELEX_LABS || [];
  var grid = document.querySelector("[data-lab-grid]");
  var empty = document.querySelector("[data-lab-empty]");
  var queryInput = document.querySelector("[data-lab-query]");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-category]"));
  var clearButton = document.querySelector("[data-lab-clear]");
  var resultCount = document.querySelector("[data-lab-result-count]");

  if (!grid) {
    return;
  }

  var categoryAliases = {
    data: "data-bi",
    Data: "data-bi",
    "computer-science": "programming",
    Programming: "programming",
    Electronics: "electronics-iot",
    "electronics-iot": "electronics-iot",
    education: "education",
    ai: "ai-ml",
    AI: "ai-ml",
    Design: "3d-cad",
    Science: "science-engineering"
  };

  var params = new URLSearchParams(window.location.search);
  var activeCategory = categoryAliases[params.get("category")] || params.get("category") || "all";
  var activeQuery = params.get("query") || "";

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getCta(lab) {
    if (lab.route && lab.route !== "#" && lab.status === "Preview") {
      return {
        label: "Xem bản xem trước",
        href: lab.route,
        disabled: false
      };
    }

    if (lab.route && lab.route !== "#" && lab.status === "Có thể dùng") {
      return {
        label: "Mở Lab",
        href: lab.route,
        disabled: false
      };
    }

    return {
      label: "Tìm hiểu",
      href: "#",
      disabled: true
    };
  }

  function createLabCard(lab) {
    var article = document.createElement("article");
    var cta = getCta(lab);
    var statusClass = lab.status === "Preview" ? " status-pill--preview" : "";
    var image = lab.coverAsset
      ? '<img class="lab-card__cover" src="' + escapeHtml(lab.coverAsset) + '" alt="' + escapeHtml(lab.title + " cover") + '" loading="lazy">'
      : '<div class="lab-card__cover lab-card__cover--empty" aria-hidden="true"></div>';

    article.className = "lab-card";
    article.innerHTML = [
      image,
      '<div class="lab-card__body">',
      '<div class="lab-card__meta">',
      '<span class="status-pill">' + escapeHtml(lab.priority) + "</span>",
      '<span class="status-pill' + statusClass + '">' + escapeHtml(lab.status) + "</span>",
      "</div>",
      "<h3>" + escapeHtml(lab.title) + "</h3>",
      "<p>" + escapeHtml(lab.summary) + "</p>",
      '<dl class="lab-card__facts">',
      "<div><dt>Lĩnh vực</dt><dd>" + escapeHtml(lab.categoryLabel) + "</dd></div>",
      "<div><dt>Đối tượng</dt><dd>" + escapeHtml(lab.audience) + "</dd></div>",
      "<div><dt>Ví dụ mẫu</dt><dd>" + escapeHtml(lab.sample) + "</dd></div>",
      "<div><dt>Offline</dt><dd>" + escapeHtml(lab.offlineStatus) + "</dd></div>",
      "</dl>",
      '<div class="lab-card__actions">',
      cta.disabled
        ? '<span class="button button--secondary button--small" aria-disabled="true">' + cta.label + "</span>"
        : '<a class="button button--primary button--small" href="' + escapeHtml(cta.href) + '">' + cta.label + "</a>",
      '<span class="lab-card__engine">Manifest v1</span>',
      "</div>",
      "</div>"
    ].join("");

    return article;
  }

  function getSearchText(lab) {
    return [
      lab.title,
      lab.categoryLabel,
      lab.summary,
      lab.audience,
      lab.sample,
      lab.priority,
      lab.status,
      lab.offlineStatus,
      (lab.keywords || []).join(" ")
    ].join(" ");
  }

  function syncControls() {
    filterButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset.category === activeCategory);
    });

    if (queryInput && queryInput.value !== activeQuery) {
      queryInput.value = activeQuery;
    }
  }

  function updateUrl() {
    var nextParams = new URLSearchParams();
    if (activeCategory && activeCategory !== "all") {
      nextParams.set("category", activeCategory);
    }
    if (activeQuery) {
      nextParams.set("query", activeQuery);
    }

    var nextUrl = window.location.pathname + (nextParams.toString() ? "?" + nextParams.toString() : "");
    window.history.pushState({ category: activeCategory, query: activeQuery }, "", nextUrl);
  }

  function render(options) {
    var query = normalize(activeQuery);
    var matches = labs.filter(function (lab) {
      var categories = lab.categories || [];
      var categoryMatch = activeCategory === "all" || categories.indexOf(activeCategory) !== -1;
      var queryMatch = !query || normalize(getSearchText(lab)).indexOf(query) !== -1;

      return categoryMatch && queryMatch;
    });

    syncControls();
    grid.replaceChildren();
    matches.forEach(function (lab) {
      grid.appendChild(createLabCard(lab));
    });

    if (empty) {
      empty.hidden = matches.length > 0;
    }

    if (resultCount) {
      resultCount.textContent = matches.length + " / " + labs.length + " Lab phù hợp";
    }

    if (!options || options.updateUrl !== false) {
      updateUrl();
    }
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeCategory = button.dataset.category || "all";
      render();
    });
  });

  if (queryInput) {
    queryInput.value = activeQuery;
    queryInput.addEventListener("input", function () {
      activeQuery = queryInput.value.trim();
      render();
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      activeCategory = "all";
      activeQuery = "";
      render();
      if (queryInput) {
        queryInput.focus();
      }
    });
  }

  window.addEventListener("popstate", function () {
    var nextParams = new URLSearchParams(window.location.search);
    activeCategory = categoryAliases[nextParams.get("category")] || nextParams.get("category") || "all";
    activeQuery = nextParams.get("query") || "";
    render({ updateUrl: false });
  });

  render({ updateUrl: false });
})();
