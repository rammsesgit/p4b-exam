import '@repo/ui/styles.css'
import { format } from 'date-fns'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Post',
}

// TEST:
const post = {
  id: 1,
  created_at: new Date().toISOString(),
  created_by: 'Guest',
  title: 'A nice big title',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure beatae sit nulla amet praesentium eius non saepe explicabo dolor iste, possimus voluptatem libero fugiat. Ad tempore a quo blanditiis facere.',
}

export default async function Post({ params }: { params: { blogId: string } }) {
  // TODO: get the actual post

  return (
    <>
      <div className='flex gap-4 items-center'>
        <Link href='/blog'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-7'>
            <path
              fillRule='evenodd'
              d='M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z'
              clipRule='evenodd'
            />
          </svg>
        </Link>
        <h1>Post #{post.id}</h1>
      </div>

      <h2 className='text-5xl'>{post.title}</h2>

      <small className='opacity-75 -mt-10'>
        By <span className='text-highlight'>{post.created_by}</span> at {format(new Date(post.created_at), 'PP')}.
      </small>

      <p className='text-lg'>{post.content}</p>
    </>
  )
}
