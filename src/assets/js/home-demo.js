(function () {
  var root = document.querySelector("[data-home-demo]");

  if (!root) {
    return;
  }

  var chartView = root.querySelector("[data-demo-chart-view]");
  var datasetButtons = root.querySelectorAll("[data-demo-dataset]");
  var chartButtons = root.querySelectorAll("[data-demo-chart]");
  var state = {
    dataset: "growth",
    chart: "bar"
  };

  var datasets = {
    growth: [28, 44, 36, 62, 74, 86],
    cost: [72, 64, 58, 48, 42, 34]
  };

  function setActive(buttons, attribute, value) {
    buttons.forEach(function (button) {
      button.classList.toggle("is-active", button.dataset[attribute] === value);
    });
  }

  function renderChart() {
    var values = datasets[state.dataset] || datasets.growth;
    chartView.dataset.chartType = state.chart;
    chartView.setAttribute(
      "aria-label",
      "Biểu đồ " + (state.chart === "bar" ? "cột" : "đường") + " với dữ liệu mẫu " + state.dataset
    );
    chartView.replaceChildren();

    values.forEach(function (value) {
      var bar = document.createElement("span");
      bar.style.height = value + "%";
      bar.style.setProperty("--point", String(value));
      chartView.appendChild(bar);
    });
  }

  datasetButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      state.dataset = button.dataset.demoDataset;
      setActive(datasetButtons, "demoDataset", state.dataset);
      renderChart();
    });
  });

  chartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      state.chart = button.dataset.demoChart;
      setActive(chartButtons, "demoChart", state.chart);
      renderChart();
    });
  });

  renderChart();
})();
