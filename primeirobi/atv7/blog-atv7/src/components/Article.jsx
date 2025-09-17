export default function Article({
  title,
  author,
  date,
  content,
  imageSrc,
  imageAlt,
  imageCaption
}) {
  return (
    <article>
      <h2>{title}</h2>
      <p><em>Por {author} em <time>{date}</time></em></p>
      <p>{content}</p>

      {imageSrc && (
        <figure>
          <img src={imageSrc} alt={imageAlt || title} />
          {imageCaption && <figcaption>{imageCaption}</figcaption>}
        </figure>
      )}
    </article>
  )
}
