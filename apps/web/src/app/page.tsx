'use client'

import Profile from '@repo/ui/profile'

// TEST:
const profiles = [
  {
    id: 1,
    name: 'Sarah',
    img_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=facearea&facepad=4&w=198&h=198',
  },
  {
    id: 2,
    name: 'John',
    img_url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?fit=facearea&facepad=4&w=198&h=198',
  },
  {
    id: 3,
    name: 'Bess',
    img_url: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?fit=facearea&facepad=4&w=198&h=198',
  },
]

export default function Blogs() {
  return (
    <div className='flex justify-center items-center flex-col mt-[20vh] gap-20'>
      <h1 className='text-center'>Choose your profile</h1>

      <section className='grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto'>
        {profiles.map(p => (
          <button key={p.id}>
            <Profile {...p} />
          </button>
        ))}

        <button>
          <Profile name='Guest' />
        </button>
      </section>
    </div>
  )
}
