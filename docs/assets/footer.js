(function() {
  function loadFooter() {
    fetch('/assets/footer.html')
      .then(function(res) { return res.text(); })
      .then(function(html) {
        document.body.insertAdjacentHTML('beforeend', html);
      })
      .catch(function(err) {
        console.error('Failed to load footer', err);
      });
    document.body.style.marginBottom = '60px';
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
  } else {
    loadFooter();
  }
})();
