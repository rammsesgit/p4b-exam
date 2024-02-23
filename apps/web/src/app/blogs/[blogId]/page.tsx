'use client'

import '@repo/ui/styles.css'

export default function Blog({ params }: { params: { blogId: string } }) {
  return (
    <>
      <h1>Blog #{params.blogId}</h1>
    </>
  )
}
