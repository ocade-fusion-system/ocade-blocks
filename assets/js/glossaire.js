document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.getElementById('glossaire-wrapper');
  if (!wrapper) return;

  // Création du champ de recherche
  const form = document.createElement('form');
  form.setAttribute('role', 'search');
  form.setAttribute('aria-label', 'Filtrer le glossaire');
  form.innerHTML = `<p>Termes à rechercher dans le glossaire.</p><input id="glossaire-search" name="q" placeholder="Terme à rechercher dans le glossaire" type="search" title="Filtrer les termes recherchés dans le glossaire." />`;
  wrapper.prepend(form);

  const input = form.querySelector('input');
  const sections = wrapper.querySelectorAll('section[glossaire-term]');

  input.addEventListener('input', function () {
    const query = input.value.toLowerCase().trim();
    sections.forEach(section => {
      const term = section.getAttribute('glossaire-term').toLowerCase();
      section.style.display = term.includes(query) ? '' : 'none';
    });
  });

  // 🟢 Scroll vers l'ancre après avoir ajouté les éléments au DOM
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100); // petit délai pour laisser le temps au DOM de se stabiliser
    }
  }
});
