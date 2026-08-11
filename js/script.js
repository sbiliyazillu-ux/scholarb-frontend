// ===================== Mobile nav toggle =====================
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ===================== Role selection tabs =====================
const roleTabs = document.querySelectorAll('.role-tab');
const rolePanels = document.querySelectorAll('.role-panel');

roleTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const role = tab.dataset.role;

    roleTabs.forEach(t => t.setAttribute('aria-selected', 'false'));
    tab.setAttribute('aria-selected', 'true');

    rolePanels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.panel === role);
    });
  });
});
