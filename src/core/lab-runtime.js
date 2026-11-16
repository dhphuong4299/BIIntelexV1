(function (root) {
  'use strict';

  var registry = Object.create(null);

  function register(definition) {
    if (!definition || !definition.slug || typeof definition.mount !== 'function') {
      throw new Error('Lab module cần slug và mount().');
    }
    registry[definition.slug] = definition;
  }

  function has(slug) {
    return Boolean(registry[slug]);
  }

  function mount(slug, context) {
    var module = registry[slug];
    if (!module) return false;
    module.mount(context || {});
    return true;
  }

  root.IntelexLabRuntime = {
    register: register,
    has: has,
    mount: mount,
    list: function () { return Object.keys(registry); }
  };
})(window);
