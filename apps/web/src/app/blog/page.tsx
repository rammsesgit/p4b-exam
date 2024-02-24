'use client'

import { useAppSelector } from '@/redux/hooks'
import { Button } from '@repo/ui/button'
import { InputText } from '@repo/ui/input-text'
import { PostPreview } from '@repo/ui/post-preview'
import { TextArea } from '@repo/ui/text-area'
import { createPost, getPosts } from 'app/actions'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Blog() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [showForm, setShowForm] = useState<boolean>(false)
  const [formHeight, setFormHeight] = useState<number>(238)
  const [posts, setPosts] = useState<{ id: number; author: string; title: string; content: string }[]>([])

  const profile = useAppSelector(state => state.profileReducer.value)

  useEffect(() => {
    const $newPostForm = document.getElementById('newPostForm')
    if ($newPostForm) {
      setFormHeight($newPostForm.offsetHeight)
    }
  }, [content])

  const setup = async () => {
    const profiles = await getPosts()
    setPosts(profiles)
  }

  useEffect(() => {
    setup()
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await createPost({ author: profile?.name || 'Guest', content, title })
      onReset()
      setup()
    } catch (err) {
      console.error(err)
    }
  }

  const onReset = () => {
    setTitle('')
    setContent('')
    setShowForm(false)
  }

  return (
    <>
      <h1>Blog</h1>

      <section className='flex flex-col items-center'>
        <div className='text-center mb-12'>
          <h2>
            Hi, <span className='font-semibold'>{profile?.name || 'Guest'}</span>.
          </h2>
          <Link href='/' className='text-xs underline text-secondary'>
            Change profile
          </Link>
        </div>

        <div
          className={` transition-all duration-300
              ${!showForm ? 'opacity-100 scale-100 h-[42px]' : 'opacity-0 scale-0 h-0'}
            `}
        >
          <Button className='group' onClick={() => setShowForm(true)}>
            <span className='w-0 group-hover:w-20 group-hover:opacity-100 transition-all duration-300 overflow-hidden whitespace-nowrap opacity-0'>
              Add post
            </span>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
              <path
                fillRule='evenodd'
                d='M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z'
                clipRule='evenodd'
              />
            </svg>
          </Button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 w-full
            ${showForm ? `opacity-100 scale-100 h-[${formHeight + 16}px]` : 'opacity-0 scale-0 h-0'}
          `}
        >
          <form id='newPostForm' onSubmit={onSubmit} className='flex flex-col gap-4 w-full max-w-md mx-auto p-1'>
            <InputText label='Title' value={title} onChange={e => setTitle(e.target.value)} />
            <TextArea label='Content' value={content} onChange={e => setContent(e.target.value)} />

            <div className='flex flex-col 2xsm:flex-row gap-4 ml-auto w-full sm:w-max mt-2'>
              <Button className='btn w-full sm:w-max' disabled={!title || !content}>
                Submit
              </Button>
              <Button className='w-full sm:w-max' type='button' onClick={onReset}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
        {posts.length
          ? posts.map(p => <PostPreview key={p.id} {...p} />)
          : [true, true, true].map((_, i) => (
              <div
                key={i}
                className='animate-pulse w-full p-6 border border-slate-700/50 rounded-3xl gap-1.5 flex flex-col'
              >
                <div className='animate-pulse bg-slate-700/50 h-3 w-1/3 rounded-full' />
                <div className='animate-pulse bg-slate-700/50 h-5 w-2/3 rounded-full mt-2 mb-3' />
                <div className='animate-pulse bg-slate-700/50 h-3 w-full rounded-full' />
                <div className='animate-pulse bg-slate-700/50 h-3 w-full rounded-full' />
                <div className='animate-pulse bg-slate-700/50 h-3 w-2/4 rounded-full' />
              </div>
            ))}
      </section>
    </>
  )
}
