document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;

  // Sur desktop : toutes les images deviennent prioritaires
  if (html.classList.contains("is-desktop")) {
    document.querySelectorAll("img.image-priority, img.image-lazy").forEach(img => {
      if ('loading' in img) img.loading = "eager";
      if ('decoding' in img) img.decoding = "sync";
      if ('fetchPriority' in img) img.fetchPriority = "high";
    });
  }
});
