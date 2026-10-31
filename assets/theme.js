(() => {
  const key = 'site-theme';
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let saved;
  try { saved = localStorage.getItem(key); } catch (_) { /* Storage is optional. */ }
  if (saved !== 'light' && saved !== 'dark') saved = null;

  function apply(theme) {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111720' : '#fafbfc';
    document.querySelectorAll('[data-dark-source]').forEach(source => {
      source.media = theme === 'dark' ? 'all' : 'not all';
    });
    document.querySelectorAll('.theme-toggle').forEach(button => {
      button.setAttribute('aria-checked', String(theme === 'dark'));
      button.hidden = false;
    });
  }

  const systemTheme = () => preference.matches ? 'dark' : 'light';
  apply(saved || systemTheme());
  document.addEventListener('DOMContentLoaded', () => {
    apply(saved || systemTheme());
    document.querySelectorAll('.theme-toggle').forEach(button => {
      button.addEventListener('click', () => {
        saved = root.dataset.theme === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(key, saved); } catch (_) { /* Continue without persistence. */ }
        apply(saved);
      });
    });
  });
  preference.addEventListener('change', () => {
    if (!saved) apply(systemTheme());
  });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      saved = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
      apply(saved || systemTheme());
    }
  });
})();
