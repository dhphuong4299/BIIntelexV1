(function () {
  'use strict';

  var labs = window.INTELEX_LABS || [];
  var workspace = document.querySelector('[data-playground-workspace]');
  var params = new URLSearchParams(window.location.search);
  var selectedSlug = params.get('lab') || document.body.dataset.lab || 'data-explorer';
  var currentLab = labs.filter(function (lab) { return lab.slug === selectedSlug; })[0] || labs[0] || {
    slug: selectedSlug,
    title: (document.querySelector('[data-lab-title]') || {}).textContent || 'Intelex Lab',
    categoryLabel: (document.querySelector('[data-lab-category]') || {}).textContent || 'Intelex Labs',
    summary: (document.querySelector('[data-lab-summary]') || {}).textContent || 'Workspace tương tác của Intelex Labs.',
    sample: (document.querySelector('[data-stage-label]') || {}).textContent || 'Workspace tương tác'
  };
  var sampleRows = [
    { month: 'T1', team: 'Kinh doanh', value: 42 }, { month: 'T2', team: 'Kinh doanh', value: 57 },
    { month: 'T3', team: 'Sản phẩm', value: 38 }, { month: 'T4', team: 'Sản phẩm', value: 64 },
    { month: 'T5', team: 'Vận hành', value: 49 }, { month: 'T6', team: 'Vận hành', value: 71 }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>\"]/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[character];
    });
  }

  function setText(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setStatus(text) {
    setText('[data-stage-status]', text);
  }

  function renderShell() {
    setText('[data-lab-title]', currentLab.title);
    setText('[data-lab-summary]', currentLab.summary);
    setText('[data-lab-category]', currentLab.categoryLabel);
    setText('[data-stage-label]', currentLab.sample);
    var switcher = document.querySelector('[data-lab-switcher]');
    if (!switcher) return;
    switcher.innerHTML = labs.filter(function (lab) { return lab.slug !== 'circuit-logic-lab'; }).map(function (lab) {
      return '<a class="lab-switch' + (lab.slug === currentLab.slug ? ' is-active' : '') + '" href="./playground.html?lab=' + encodeURIComponent(lab.slug) + '">' + escapeHtml(lab.title) + '</a>';
    }).join('');
  }

  function renderLab() {
    renderShell();
    setStatus('Sẵn sàng');
    if (!workspace) return;
    try {
      var runtime = window.IntelexLabRuntime;
      if (!runtime || !runtime.has(currentLab.slug)) throw new Error('Chưa đăng ký module cho lab: ' + currentLab.slug);
      runtime.mount(currentLab.slug, {
        workspace: workspace,
        sampleRows: sampleRows,
        escapeHtml: escapeHtml,
        setStatus: setStatus
      });
    } catch (error) {
      console.error('Intelex Lab render error', error);
      workspace.innerHTML = '<div class="chart-studio-empty"><strong>Không thể tải workspace.</strong><span>' + escapeHtml(error.message || 'Lỗi JavaScript không xác định.') + '</span><small>Hãy tải lại trang sau khi kiểm tra file JavaScript.</small></div>';
      setStatus('Cần kiểm tra');
    }
  }

  var resetButton = document.querySelector('[data-reset-lab]');
  if (resetButton) resetButton.addEventListener('click', renderLab);
  renderLab();
})();
