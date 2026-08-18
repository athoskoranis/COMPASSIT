import type { Metadata } from 'next'
import BlogIndexClient from './client'
import { posts } from '@/lib/posts'

const BASE = 'https://compass-its.com'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thinking out loud on technology, infrastructure, and what makes IT work in Qatar and the GCC.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Compass IT Solutions',
    description: 'Thinking out loud on technology, infrastructure, and what makes IT work in Qatar and the GCC.',
    url: '/blog',
  },
}

// CollectionPage + ItemList for the blog index.
//
// The ItemList is built from lib/posts.ts rather than written out by hand, for
// the reason that file already gives for the index and hero rail: it is the
// single source of truth, and anything that restates it silently goes stale.
// This markup arrived listing six posts when the site had eight — the two most
// recent were published after it was written. Declaring numberOfItems: 6 on a
// page that renders eight article links is a mismatch a crawler can see, and it
// would have gone wrong again the next time a post lands.
//
// itemListOrder is Descending because posts[] is newest-first.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${BASE}/blog#collectionpage`,
      url: `${BASE}/blog`,
      name: 'Blog | Compass IT Solutions',
      description: 'Technology, infrastructure, and IT insights for businesses in Qatar and the GCC.',
      isPartOf: { '@id': `${BASE}/#website` },
      about: {
        '@type': 'Thing',
        name: 'Technology, IT infrastructure, cloud solutions, cybersecurity and AI',
      },
      publisher: { '@id': `${BASE}/#organization` },
      mainEntity: { '@id': `${BASE}/blog#itemlist` },
    },
    {
      '@type': 'ItemList',
      '@id': `${BASE}/blog#itemlist`,
      name: 'Compass IT Solutions Blog Articles',
      numberOfItems: posts.length,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: posts.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'BlogPosting',
          headline: post.title,
          url: `${BASE}/blog/${post.slug}`,
        },
      })),
    },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogIndexClient />
    </>
  )
}
