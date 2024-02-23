'use client'

// import '../globals.css'

import { Button } from '@repo/ui/button'
import { InputText } from '@repo/ui/input-text'
// import '@repo/ui/styles.css'
import { TextArea } from '@repo/ui/text-area'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Blogs() {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [showForm, setShowForm] = useState<boolean>(false)
  const [formHeight, setFormHeight] = useState<number>(238)
  const [response, setResponse] = useState<{ message: string } | null>(null)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    const $newPostForm = document.getElementById('newPostForm')
    if ($newPostForm) {
      setFormHeight($newPostForm.offsetHeight)
    }
  }, [content])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const result = await fetch('api/blog', {
        method: 'POST',
        body: new FormData(e.currentTarget),
      })
      const response = await result.json()
      setResponse(response)
    } catch (err) {
      console.error(err)
      setError('Unable to fetch response')
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
            Hi, <span className='font-semibold'>{'Guest'}</span>.
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
          <form id='newPostForm' onSubmit={onSubmit} className='flex flex-col gap-4 w-full max-w-md mx-auto'>
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

      <section>
        <pre>// TODO: show blogs bentos</pre>
      </section>
    </>
  )
}
