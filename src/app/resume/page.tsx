import { Metadata } from 'next'
import ResumeClient from '@/components/ResumeClient'

export const metadata: Metadata = {
  title: 'Arham Ali – Front-End Developer Resume',
  description: 'Explore the resume of Arham Ali, a Front-End Developer skilled in Next.js, TypeScript, and modern web technologies.',
  robots: 'index, follow',
  openGraph: {
    title: 'Arham Ali – Front-End Developer Resume',
    description: 'Explore the resume of Arham Ali, a Front-End Developer skilled in modern web technologies.',
    type: 'website',
    url: 'https://arhamali.me/resume',
    images: ['https://arhamali.me/NewAvatar.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arham Ali – Front-End Developer Resume',
    description: 'Explore Arham Ali\'s resume and projects. Skilled in Next.js, TypeScript, and modern web technologies.',
    images: ['https://arhamali.me/NewAvatar.png']
  },
  alternates: {
    canonical: 'https://arhamali.me/resume'
  }
}

const ResumePage = () => {
  return <ResumeClient />
}

export default ResumePage