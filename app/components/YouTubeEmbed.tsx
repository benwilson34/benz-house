/**
 * `src` should be from the generated YouTube embed: on the desired video page,
 *   click on "Share" then "Embed" and copy the `src` string.
 */
export default function YouTubeEmbed({ src }: { src: string }) {
  return (
    // see https://css-tricks.com/fluid-width-video/
    <div className="relative pb-[56.25%] h-0 mb-4">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
