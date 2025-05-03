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

  // Si un customThumbnail est fourni, on l'utilise, sinon on charge une version WebP de l'image de la vidéo
  const imageURL = customThumbnail
  ? customThumbnail.replace(".webp", "-1024x576.webp")
  : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

const srcSet = customThumbnail
  ? [
      customThumbnail + " 128w", // image d'origine utilisée pour la plus petite taille
      customThumbnail.replace(".webp", "-450x253.webp") + " 450w",
      customThumbnail.replace(".webp", "-768x432.webp") + " 768w",
      customThumbnail.replace(".webp", "-1024x576.webp") + " 1024w"
    ].join(", ")
  : [
      `https://img.youtube.com/vi/${videoId}/sddefault.jpg 640w`,
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg 480w`,
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg 320w`,
      `https://img.youtube.com/vi/${videoId}/default.jpg 120w`
    ].join(", ");


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoTitle || "Titre de la vidéo",
    description: videoDescription || "Description de la vidéo non renseignée.",
    thumbnailUrl: `https://img.youtube.com/vi/${videoId}/0.webp`,
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

      {/* Fallback pour Googlebot (uniquement vidéo, sans iframe) */}
		<video
          controls
          preload="none"
          poster={imageURL}
          width="640"
          height="360"
          style={{ width: "100%", height: "auto", aspectRatio: "16 / 9", display: "none" }}
        >
          <source src="/wp-content/uploads/2025/04/video.mp4" type="video/mp4" />
        </video>

      {/* Données structurées VideoObject */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}