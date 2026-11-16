(function (root) {
  'use strict';

  function install() {
    var workspace = document.querySelector('[data-playground-workspace]');
    if (!workspace) return;
    if (workspace.dataset.dragDropReady === 'true' && workspace.querySelector('[data-chart-search]') && workspace.querySelector('[data-panel-toggle]')) return;
    var library = workspace.querySelector('[data-chart-type-list]');
    var canvas = workspace.querySelector('[data-chart-canvas]');
    if (!library || !canvas) return;
    workspace.dataset.dragDropReady = 'true';
    var surface = workspace.querySelector('[data-chart-surface]');
    var dropHint = document.createElement('div');
    dropHint.className = 'chart-drop-hint';
    dropHint.innerHTML = '<strong>Thả biểu đồ vào canvas</strong><span>Hoặc bấm vào một loại chart ở thư viện.</span>';
    dropHint.hidden = true;
    canvas.appendChild(dropHint);
    var shell = workspace.querySelector('.chart-studio-shell');
    var libraryPanel = workspace.querySelector('.chart-studio-library');
    var inspectorPanel = workspace.querySelector('.chart-studio-inspector');

    function addPanelToggle(panel, kind, label) {
      if (!panel || panel.querySelector('[data-panel-toggle]')) return;
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'panel-toggle';
      button.dataset.panelToggle = kind;
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Thu gọn ' + label);
      button.textContent = kind === 'library' ? '‹' : '›';
      panel.insertBefore(button, panel.firstChild);
      button.addEventListener('click', function () {
        var collapsedClass = kind === 'library' ? 'is-library-collapsed' : 'is-inspector-collapsed';
        var collapsed = shell.classList.toggle(collapsedClass);
        button.setAttribute('aria-expanded', String(!collapsed));
        button.setAttribute('aria-label', (collapsed ? 'Mở rộng ' : 'Thu gọn ') + label);
        button.textContent = kind === 'library' ? (collapsed ? '›' : '‹') : (collapsed ? '‹' : '›');
      });
    }
    addPanelToggle(libraryPanel, 'library', 'Chart Library');
    addPanelToggle(inspectorPanel, 'inspector', 'Cấu hình');

    var categoryMap = {
      line: 'Xu hướng', area: 'Xu hướng', mixed: 'Xu hướng', trendline: 'Xu hướng',
      bar: 'So sánh', box: 'So sánh', scatter: 'So sánh', bubble: 'So sánh',
      pie: 'Tỷ trọng', donut: 'Tỷ trọng', funnel: 'Tỷ trọng', sunburst: 'Tỷ trọng',
      table: 'KPI & bảng', kpi: 'KPI & bảng'
    };
    var libraryHeading = library.querySelector('.chart-studio-heading');
    var libraryTools = document.createElement('div');
    libraryTools.className = 'chart-library-tools';
    libraryTools.innerHTML = '<label><span class="sr-only">Tìm biểu đồ</span><input type="search" data-chart-search placeholder="Tìm biểu đồ…"></label><label><span class="sr-only">Nhóm biểu đồ</span><select data-chart-category><option value="all">Tất cả nhóm</option><option value="Xu hướng">Xu hướng</option><option value="So sánh">So sánh &amp; phân phối</option><option value="Tỷ trọng">Tỷ trọng &amp; luồng</option><option value="KPI &amp; bảng">KPI &amp; bảng</option></select></label>';
    if (libraryHeading) libraryHeading.insertAdjacentElement('afterend', libraryTools); else library.insertBefore(libraryTools, library.firstChild);
    var search = libraryTools.querySelector('[data-chart-search]');
    var category = libraryTools.querySelector('[data-chart-category]');
    library.querySelectorAll('[data-chart-type-option]').forEach(function (button) {
      button.dataset.chartCategory = categoryMap[button.dataset.chartTypeOption] || 'Khác';
      button.title = button.querySelector('strong').textContent + ' · ' + button.querySelector('small').textContent;
    });
    function filterLibrary() {
      var query = search.value.trim().toLowerCase(), selectedCategory = category.value;
      library.querySelectorAll('[data-chart-type-option]').forEach(function (button) {
        var text = button.textContent.toLowerCase();
        button.hidden = Boolean((query && text.indexOf(query) < 0) || (selectedCategory !== 'all' && button.dataset.chartCategory !== selectedCategory));
      });
    }
    search.addEventListener('input', filterLibrary);
    category.addEventListener('change', filterLibrary);

    function syncInspector() {
      var typeSelect = inspectorPanel.querySelector('[data-edit-type]');
      var sizeField = inspectorPanel.querySelector('[data-edit-size]');
      if (!typeSelect || !sizeField) return;
      var sizeLabel = sizeField.closest('label');
      if (sizeLabel) sizeLabel.hidden = typeSelect.value !== 'bubble' && typeSelect.value !== 'scatter';
    }
    if (root.MutationObserver) new MutationObserver(syncInspector).observe(inspectorPanel, { childList: true, subtree: true });
    syncInspector();

    function restorePositions() {
      if (!surface) return;
      try {
        var dashboard = JSON.parse(root.localStorage.getItem('intelex-chart-positions') || '{}');
        var positions = {};
        positions = dashboard;
        surface.querySelectorAll('[data-chart-id]').forEach(function (card) {
          var item = positions[card.dataset.chartId];
          if (item) {
            if (Number.isFinite(Number(item.left))) card.style.left = item.left + 'px';
            if (Number.isFinite(Number(item.top))) card.style.top = item.top + 'px';
            if (Number.isFinite(Number(item.width))) card.style.width = item.width + 'px';
            if (Number.isFinite(Number(item.height))) card.style.height = item.height + 'px';
          }
          alignBarLabels(card);
        });
      } catch (error) {}
    }
    function alignBarLabels(card) {
      var svg = card.querySelector('svg');
      if (!svg) return;
      var bars = Array.prototype.slice.call(svg.querySelectorAll('.chart-bar'));
      var labels = Array.prototype.slice.call(svg.querySelectorAll('.chart-label'));
      if (!bars.length || !labels.length) return;
      var count = bars.length;
      var width = Math.min(42, 320 / Math.max(1, count));
      bars.forEach(function (bar, index) {
        var center = count === 1 ? 74 : 74 + index * (400 / (count - 1));
        bar.setAttribute('x', center - width / 2);
        bar.setAttribute('width', width);
        if (labels[index]) labels[index].setAttribute('x', center);
      });
    }
    if (surface && root.MutationObserver) new MutationObserver(restorePositions).observe(surface, { childList: true });
    restorePositions();

    library.querySelectorAll('[data-chart-type-option]').forEach(function (button) {
      button.setAttribute('draggable', 'true');
      button.addEventListener('dragstart', function (event) {
        event.dataTransfer.effectAllowed = 'copy';
        event.dataTransfer.setData('text/chart-type', button.dataset.chartTypeOption);
        button.classList.add('is-dragging');
      });
      button.addEventListener('dragend', function () { button.classList.remove('is-dragging'); });
    });

    canvas.addEventListener('dragover', function (event) {
      if (!event.dataTransfer.types || Array.prototype.indexOf.call(event.dataTransfer.types, 'text/chart-type') < 0) return;
      event.preventDefault();
      canvas.classList.add('is-drag-over');
      dropHint.hidden = false;
    });
    canvas.addEventListener('dragleave', function () { canvas.classList.remove('is-drag-over'); dropHint.hidden = true; });
    canvas.addEventListener('drop', function (event) {
      var type = event.dataTransfer.getData('text/chart-type');
      if (!type) return;
      event.preventDefault();
      canvas.classList.remove('is-drag-over');
      dropHint.hidden = true;
      var button = Array.prototype.slice.call(library.querySelectorAll('[data-chart-type-option]')).filter(function (item) { return item.dataset.chartTypeOption === type; })[0];
      if (!button) return;
      button.click();
      root.setTimeout(function () {
        var cards = canvas.querySelectorAll('[data-chart-id]');
        var card = cards[cards.length - 1];
        if (!card) return;
        var rect = canvas.getBoundingClientRect();
        card.style.left = Math.max(12, event.clientX - rect.left + canvas.scrollLeft - 180) + 'px';
        card.style.top = Math.max(12, event.clientY - rect.top + canvas.scrollTop - 32) + 'px';
        persistCardPosition(card);
      }, 0);
    });

    canvas.addEventListener('pointerdown', function (event) {
      var resizeHandle = event.target.closest('[data-resize]');
      var resizeCard = event.target.closest('[data-chart-id]');
      if (resizeHandle && resizeCard) {
        event.preventDefault();
        event.stopPropagation();
        var resizeStartX = event.clientX, resizeStartY = event.clientY;
        var startWidth = resizeCard.offsetWidth, startHeight = resizeCard.offsetHeight;
        function resize(pointer) {
          resizeCard.style.width = Math.max(300, startWidth + pointer.clientX - resizeStartX) + 'px';
          resizeCard.style.height = Math.max(220, startHeight + pointer.clientY - resizeStartY) + 'px';
        }
        function stopResize() {
          root.removeEventListener('pointermove', resize);
          root.removeEventListener('pointerup', stopResize);
          root.removeEventListener('pointercancel', stopResize);
          persistCardSize(resizeCard);
        }
        root.addEventListener('pointermove', resize);
        root.addEventListener('pointerup', stopResize);
        root.addEventListener('pointercancel', stopResize);
        return;
      }
      var handle = event.target.closest('[data-chart-drag-handle]');
      var card = event.target.closest('[data-chart-id]');
      if (!handle || !card || event.target.closest('button')) return;
      event.preventDefault();
      var startX = event.clientX, startY = event.clientY, moved = false;
      var originX = parseFloat(card.style.left) || 0, originY = parseFloat(card.style.top) || 0;
      card.classList.add('is-dragging');
      function move(pointer) {
        if (Math.abs(pointer.clientX - startX) > 2 || Math.abs(pointer.clientY - startY) > 2) moved = true;
        card.style.left = Math.max(12, originX + pointer.clientX - startX) + 'px';
        card.style.top = Math.max(12, originY + pointer.clientY - startY) + 'px';
      }
      function stop() {
        card.classList.remove('is-dragging');
        root.removeEventListener('pointermove', move);
        root.removeEventListener('pointerup', stop);
        root.removeEventListener('pointercancel', stop);
        if (moved) card.dataset.suppressClick = 'true';
        persistCardPosition(card);
      }
      root.addEventListener('pointermove', move);
      root.addEventListener('pointerup', stop);
      root.addEventListener('pointercancel', stop);
    });
    canvas.addEventListener('click', function (event) {
      var card = event.target.closest('[data-chart-id]');
      if (!card || card.dataset.suppressClick !== 'true') return;
      event.preventDefault();
      event.stopPropagation();
      delete card.dataset.suppressClick;
    }, true);
  }

  function persistCardPosition(card) {
    try {
      var positions = JSON.parse(root.localStorage.getItem('intelex-chart-positions') || '{}');
      positions[card.dataset.chartId] = positions[card.dataset.chartId] || {};
      positions[card.dataset.chartId].left = parseFloat(card.style.left) || 0;
      positions[card.dataset.chartId].top = parseFloat(card.style.top) || 0;
      root.localStorage.setItem('intelex-chart-positions', JSON.stringify(positions));
    } catch (error) {}
  }

  function persistCardSize(card) {
    try {
      var positions = JSON.parse(root.localStorage.getItem('intelex-chart-positions') || '{}');
      positions[card.dataset.chartId] = positions[card.dataset.chartId] || {};
      positions[card.dataset.chartId].width = card.offsetWidth;
      positions[card.dataset.chartId].height = card.offsetHeight;
      root.localStorage.setItem('intelex-chart-positions', JSON.stringify(positions));
    } catch (error) {}
  }

  root.setTimeout(install, 0);
  root.addEventListener('load', install);
})(window);
