'use client'

import { set } from '@/redux/features/profileSlice'
import { useAppDispatch } from '@/redux/hooks'
import Profile from '@repo/ui/profile'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getProfiles } from './actions'

export default function Blog() {
  const [profiles, setProfiles] = useState<{ id: number; name: string; image_url?: string }[]>([])
  const router = useRouter()
  const dispatch = useAppDispatch()

  const setup = async () => {
    setProfiles(await getProfiles())
  }

  useEffect(() => {
    setup()
  }, [])

  const onChangeProfile = (profile: { id?: number; name: string; image_url?: string }) => {
    dispatch(set(profile))
    router.push('/blog')
  }

  return (
    <div className='flex justify-center items-center flex-col mt-[20vh] gap-20'>
      <h1 className='text-center'>Choose your profile</h1>

      <section className='grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto'>
        {profiles?.length ? (
          <>
            {profiles.map(p => (
              <button key={p.id} onClick={() => onChangeProfile(p)} className='custom-pulse'>
                <Profile {...p} />
              </button>
            ))}

            <button onClick={() => onChangeProfile({ name: 'Guest' })} className='custom-pulse'>
              <Profile name='Guest' />
            </button>
          </>
        ) : (
          [true, true, true, true].map((_, i) => (
            <div
              key={i}
              className='animate-pulse w-full p-3 border border-slate-700/30 rounded-3xl flex flex-col gap-2 items-center'
            >
              <div className='animate-pulse bg-slate-700/50 rounded-full size-28 mb-2' />
              <div className='animate-pulse bg-slate-700/50 h-7 w-full rounded-full' />
            </div>
          ))
        )}
      </section>
    </div>
  )
}
