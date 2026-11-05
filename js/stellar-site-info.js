(function () {
  'use strict';
  var info = document.getElementById('stellar-site-info');
  if (!info) return;
  var runtime = info.querySelector('[data-runtime]');
  var since = Date.parse(info.dataset.since);
  if (runtime && Number.isFinite(since)) {
    function update() {
      var seconds = Math.max(0, Math.floor((Date.now() - since) / 1000));
      runtime.textContent = Math.floor(seconds / 86400) + ' 天 ' +
        Math.floor(seconds / 3600) % 24 + ' 时 ' +
        Math.floor(seconds / 60) % 60 + ' 分 ' + seconds % 60 + ' 秒';
    }
    update();
    setInterval(update, 1000);
  }
})();
