(function () {
  var courses = window.INTELEX_COURSES || [];
  var grid = document.querySelector("[data-course-grid]");
  if (grid) {
    var search = document.querySelector("[data-course-search]");
    var filters = document.querySelector("[data-course-filters]");
    var empty = document.querySelector("[data-course-empty]");
    var clear = document.querySelector("[data-clear-filters]");
    var params = new URLSearchParams(window.location.search);
    var selectedCategory = params.get("category") || "all";
    var categories = [{ id: "all", label: "Tất cả" }].concat(courses.reduce(function (items, course) { if (!items.some(function (item) { return item.id === course.category; })) items.push({ id: course.category, label: course.categoryLabel }); return items; }, []));
    filters.innerHTML = categories.map(function (category) { return '<button class="chip ' + (category.id === selectedCategory ? "is-active" : "") + '" type="button" data-category="' + category.id + '">' + category.label + '</button>'; }).join("");
    function render() {
      var term = (search.value || "").trim().toLowerCase();
      var visible = courses.filter(function (course) { return (selectedCategory === "all" || course.category === selectedCategory) && (!term || (course.title + " " + course.description + " " + course.categoryLabel).toLowerCase().indexOf(term) >= 0); });
      grid.innerHTML = visible.map(function (course) { var href = course.detail || "./courses/" + course.slug + "/index.html"; return '<article class="course-card"><div class="course-card__top"><span class="status-pill">' + course.categoryLabel + '</span><span class="course-level">' + course.level + '</span></div><h3>' + course.title + '</h3><p>' + course.description + '</p><dl class="course-card__facts"><div><dt>Thời lượng</dt><dd>' + course.duration + '</dd></div><div><dt>Hình thức</dt><dd>' + course.format + '</dd></div></dl><a class="course-link" href="' + href + '">Xem chi tiết <span aria-hidden="true">→</span></a></article>'; }).join("");
      empty.hidden = visible.length > 0;
    }
    filters.addEventListener("click", function (event) { var button = event.target.closest("[data-category]"); if (!button) return; selectedCategory = button.dataset.category; filters.querySelectorAll(".chip").forEach(function (chip) { chip.classList.toggle("is-active", chip === button); }); params.set("category", selectedCategory); history.replaceState({}, "", window.location.pathname + "?" + params.toString() + "#courses"); render(); });
    search.addEventListener("input", render);
    clear.addEventListener("click", function () { selectedCategory = "all"; search.value = ""; filters.querySelector('[data-category="all"]').click(); });
    render();
  }
  var form = document.querySelector("[data-consultation-form]");
  if (form) form.addEventListener("submit", function (event) { event.preventDefault(); var feedback = form.querySelector("[data-form-feedback]"); feedback.hidden = false; feedback.textContent = "Đã ghi nhận thông tin trên giao diện mẫu. Khi kênh tiếp nhận chính thức được thống nhất, form sẽ được kết nối vào quy trình xử lý."; form.reset(); });
}());
