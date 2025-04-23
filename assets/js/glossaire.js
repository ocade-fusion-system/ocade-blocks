document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.getElementById('glossaire-wrapper');
  if (!wrapper) return;

  // Création du champ de recherche (accessible RGAA)
  const form = document.createElement('form');
  form.setAttribute('role', 'search');
  form.setAttribute('aria-label', 'Filtrer le glossaire');
  form.innerHTML = `<input id="glossaire-search" name="q" type="search" title="Filtrer les termes recherchés dans le glossaire." />`;
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
});
