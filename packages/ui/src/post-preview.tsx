export function PostPreview({
  id,
  author,
  title,
  content,
}: {
  id: number
  author: string
  title: string
  content: string
}): JSX.Element {
  let contentToShow = content

  if (content.length > 70) {
    contentToShow = content.slice(0, 70).trim() + '...'
  }

  return (
    <article className='card'>
      <a href={`/blogs/${id}`}>
        <h3 className='author'>{author}</h3>
        <span className='title'>{title}</span>
        <p className='content'>{contentToShow}</p>
      </a>
    </article>
  )
}
