(function () {
  const elkPresets = {
    // چیدمان فشردهٔ راست به چپ
    'rtl-compact': {
      'elk.direction': 'RIGHT',
      'elk.edgeRouting': 'SPLINES',
      'elk.spacing.nodeNode': 20, // فاصلهٔ گره تا گره (پیکسل)
      'elk.layered.spacing.nodeNodeBetweenLayers': 40 // فاصلهٔ گره‌ها بین لایه‌ها (پیکسل)
    },
    // چیدمان باز برای نمودارهای راست به چپ
    'rtl-roomy': {
      'elk.direction': 'RIGHT',
      'elk.edgeRouting': 'SPLINES',
      'elk.spacing.nodeNode': 60, // فاصلهٔ گره تا گره (پیکسل)
      'elk.layered.spacing.nodeNodeBetweenLayers': 80 // فاصلهٔ گره‌ها بین لایه‌ها (پیکسل)
    }
  };

  window.getElkPreset = function (name) {
    const preset = elkPresets[name];
    return preset ? JSON.parse(JSON.stringify(preset)) : null;
  };

  const dagrePresets = {
    // نسخهٔ فشرده برای جهت راست به چپ
    'rl-compact': {
      rankDir: 'RL',
      rankSep: 40, // فاصلهٔ ردیف‌ها (پیکسل)
      nodeSep: 20 // فاصلهٔ گره‌ها (پیکسل)
    },
    // نسخهٔ باز برای جهت راست به چپ
    'rl-roomy': {
      rankDir: 'RL',
      rankSep: 80, // فاصلهٔ ردیف‌ها (پیکسل)
      nodeSep: 40 // فاصلهٔ گره‌ها (پیکسل)
    }
  };

  window.getDagrePreset = function (name) {
    const preset = dagrePresets[name];
    return preset ? JSON.parse(JSON.stringify(preset)) : null;
  };
})();
