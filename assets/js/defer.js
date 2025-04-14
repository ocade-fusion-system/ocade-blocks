document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;

  // Vérifie si on est en mode desktop
  if (html.classList.contains("is-desktop")) {
    document.querySelectorAll("img.image-priority").forEach(img => {
      if ('loading' in img) img.loading = "eager";
      if ('decoding' in img) img.decoding = "sync";
      if ('fetchPriority' in img) img.fetchPriority = "high";
    });
  }
});
