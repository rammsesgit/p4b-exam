'use client'

import { set } from '@/redux/features/profileSlice'
import { useAppDispatch } from '@/redux/hooks'
import Profile from '@repo/ui/profile'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// TEST:
const profiles = [
  {
    id: 1,
    name: 'Sarah',
    image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=4&w=198&h=198',
  },
  {
    id: 2,
    name: 'John',
    image_url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?fit=facearea&facepad=4&w=198&h=198',
  },
  {
    id: 3,
    name: 'Bess',
    image_url: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?fit=facearea&facepad=4&w=198&h=198',
  },
]

export default function Blog() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // TODO: Get profiles
  }, [])

  const onChangeProfile = (profile: { id?: number; name: string; image_url?: string }) => {
    dispatch(set(profile))
    router.push('/blog')
  }

  return (
    <div className='flex justify-center items-center flex-col mt-[20vh] gap-20'>
      <h1 className='text-center'>Choose your profile</h1>

      <section className='grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto'>
        {profiles.map(p => (
          <button key={p.id} onClick={() => onChangeProfile(p)}>
            <Profile {...p} />
          </button>
        ))}

        <button onClick={() => onChangeProfile({ name: 'Guest' })}>
          <Profile name='Guest' />
        </button>
      </section>
    </div>
  )
}
