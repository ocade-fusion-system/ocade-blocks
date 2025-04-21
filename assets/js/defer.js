document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;

  // 🌐 Sur desktop : rendre les images prioritaires
  if (html.classList.contains("is-desktop")) {
    document.querySelectorAll("img.image-priority, img.image-lazy").forEach(img => {
      if ('loading' in img) img.loading = "eager";
      if ('decoding' in img) img.decoding = "sync";
      if ('fetchPriority' in img) img.fetchPriority = "high";
    });
  }

  // ▶️ Remplacement des images YouTube par iframe au clic
  document.querySelectorAll(".wp-block-ocade-blocks-youtube-lite img").forEach(img => {
    img.addEventListener("click", () => {
      console.log("YouTube Lite clicked", img);
      const wrapper = img.closest(".wp-block-ocade-blocks-youtube-lite");
      const videoId = wrapper?.dataset?.videoId;
      if (!videoId) return;

      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "1");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.style.width = "100%";
      iframe.style.aspectRatio = "16 / 9";

      wrapper.innerHTML = "";
      wrapper.appendChild(iframe);
      wrapper.classList.add("is-playing");
    });
  });
});
