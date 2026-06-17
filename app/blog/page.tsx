import type { Metadata } from 'next'
import BlogIndexClient from './client'

export const metadata: Metadata = {
  title: 'Blog — Compass IT Solutions',
  description: 'Thinking out loud on technology, infrastructure, and what makes IT work in Qatar and the GCC.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Compass IT Solutions',
    description: 'Thinking out loud on technology, infrastructure, and what makes IT work in Qatar and the GCC.',
    url: '/blog',
  },
}

export default function BlogPage() {
  return <BlogIndexClient />
}
