import './globals.css'

import '@repo/ui/styles.css'
import { Metadata } from 'next'
import { inter, jura } from './fonts'
import { ProfileProvider } from '@/redux/providers'

export const metadata: Metadata = {
  title: {
    template: '%s | Blog',
    default: 'Blog',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>Blog</title>
        <link rel='icon' href='/img/favicon.png' />

        <meta name='title' content='Blog | P4B exam' />
        <meta itemProp='name' content='Blogs' />
        <meta name='description' content='React developer exam' />
        <meta itemProp='description' content='React developer exam' />
      </head>
      <body className={`${jura.variable} ${inter.variable}`}>
        <main className='main-content'>
          <span className='absolute pointer-events-none mix-blend-normal will-change-[filter] inset-x-0 rounded-full opacity-10 -top-[50vh] h-screen blur-[75px] bg-glow-conic' />
          <ProfileProvider>{children}</ProfileProvider>
        </main>
      </body>
    </html>
  )
}
