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
          srcSet={`
      https://img.youtube.com/vi/${videoId}/sddefault.jpg 640w,
      https://img.youtube.com/vi/${videoId}/hqdefault.jpg 480w,
      https://img.youtube.com/vi/${videoId}/mqdefault.jpg 320w,
      https://img.youtube.com/vi/${videoId}/default.jpg 120w
    `}
          sizes="(max-width: 600px) 100vw, 600px"
          alt={videoAlt || "Aperçu de la vidéo YouTube"}
          loading={lazyLoading ? "lazy" : "eager"}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
            aspectRatio: "16 / 9",
          }}
        />
      </div>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}
