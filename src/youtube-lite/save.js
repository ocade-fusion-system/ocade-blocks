import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    videoId,
    customThumbnail,
    videoAlt,
    lazyLoading,
    videoTitle,
    videoDescription,
    videoDateCreation,
    urlPageSite,
  } = attributes;

  const blockProps = useBlockProps.save();

  const imageURL = customThumbnail
    ? customThumbnail
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const getSrcSet = (url) => {
    if (!url.includes("youtube.com")) {
      try {
        const urlObj = new URL(url);
        const ext = urlObj.pathname.split(".").pop();
        const baseName = url.replace(`.${ext}`, "");
        return `
          ${baseName}-1024x576.${ext} 1024w,
          ${baseName}-768x432.${ext} 768w,
          ${baseName}-450x253.${ext} 450w
        `;
      } catch (e) {
        return "";
      }
    }

    return `
      https://img.youtube.com/vi/${videoId}/sddefault.jpg 640w,
      https://img.youtube.com/vi/${videoId}/hqdefault.jpg 480w,
      https://img.youtube.com/vi/${videoId}/mqdefault.jpg 320w,
      https://img.youtube.com/vi/${videoId}/default.jpg 120w
    `;
  };

  const srcSet = getSrcSet(imageURL);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoTitle || "Titre de la vidéo",
    description: videoDescription || "Description de la vidéo non renseignée.",
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/0.jpg`,
    uploadDate: videoDateCreation
      ? new Date(videoDateCreation).toISOString()
      : new Date().toISOString(),
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    contentUrl: urlPageSite || "",
  };

  return (
    <>
      <div
        {...blockProps}
        role="button"
        tabIndex="0"
        aria-label="Lire la vidéo YouTube"
        data-video-id={videoId}
        data-video-lazyloading={lazyLoading ? "lazy" : "eager"}
      >
        <img
          src={imageURL}
          srcSet={srcSet}
          sizes="(max-width: 1024px) 100vw, 1024px"
          alt={videoAlt || "Aperçu de la vidéo YouTube"}
          loading={lazyLoading ? "lazy" : "eager"}
          width="640"
          height="360"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
            aspectRatio: "16 / 9",
          }}
        />
      </div>

      {/* Fallback pour Googlebot */}
      <noscript>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </noscript>

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}
