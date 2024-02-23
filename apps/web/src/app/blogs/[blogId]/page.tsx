import '@repo/ui/styles.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TODO: post title',
}

export default async function Blog({ params }: { params: { blogId: string } }) {
  return (
    <>
      <h1>Blog #{params.blogId}</h1>
    </>
  )
}
