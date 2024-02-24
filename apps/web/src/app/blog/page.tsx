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
  const [pattern, setPattern] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [showCreateForm, setShowCreateForm] = useState<boolean>(false)
  const [showSearchForm, setShowSearchForm] = useState<boolean>(false)
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
    setPosts(await getPosts())
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

  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
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
    setPattern('')
    setShowSearchForm(false)

    setTitle('')
    setContent('')
    setShowCreateForm(false)
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

        <div className='flex gap-4'>
          <div
            className={`transition-all duration-300
              ${showSearchForm || showCreateForm ? 'opacity-0 scale-0 h-0' : 'opacity-100 scale-100 h-[42px]'}
            `}
          >
            <Button className='group' onClick={() => setShowSearchForm(true)}>
              <span className='w-0 group-hover:w-16 group-hover:opacity-100 transition-all duration-300 overflow-hidden opacity-0'>
                Search
              </span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
                <path
                  fillRule='evenodd'
                  d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </Button>
          </div>

          <div
            className={`transition-all duration-300
              ${showSearchForm || showCreateForm ? 'opacity-0 scale-0 h-0' : 'opacity-100 scale-100 h-[42px]'}
            `}
          >
            <Button className='group' onClick={() => setShowCreateForm(true)}>
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
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 w-full
            ${showSearchForm ? `opacity-100 scale-100 h-[${formHeight + 16}px]` : 'opacity-0 scale-0 h-0'}
          `}
        >
          <form
            id='newPostForm'
            onSubmit={onSearch}
            onKeyUp={e => e.code === 'Escape' && onReset()}
            className='flex flex-col gap-4 w-full max-w-md mx-auto p-1'
          >
            <InputText
              label='Type a title, author or content'
              value={pattern}
              onChange={e => setPattern(e.target.value)}
            />

            <Button className='w-full 3xsm:w-max ml-auto' type='button' onClick={onReset}>
              Cancel
            </Button>
          </form>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 w-full
            ${showCreateForm ? `opacity-100 scale-100 h-[${formHeight + 16}px]` : 'opacity-0 scale-0 h-0'}
          `}
        >
          <form
            id='newPostForm'
            onSubmit={onSubmit}
            onKeyUp={e => e.code === 'Escape' && onReset()}
            className='flex flex-col gap-4 w-full max-w-md mx-auto p-1'
          >
            <InputText label='Title' value={title} onChange={e => setTitle(e.target.value)} />
            <TextArea label='Content' value={content} onChange={e => setContent(e.target.value)} />

            <div className='flex flex-col 2xsm:flex-row gap-4 ml-auto w-full sm:w-max'>
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
          ? posts
              .filter(
                p =>
                  p.author.toLowerCase().includes(pattern.toLowerCase()) ||
                  p.title.toLowerCase().includes(pattern.toLowerCase()) ||
                  p.content.toLowerCase().includes(pattern.toLowerCase()),
              )
              .map(p => <PostPreview key={p.id} {...p} />)
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
