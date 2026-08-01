'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { posts } from '@/lib/posts'


export default function BlogIndexClient() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-[54px] relative z-[1] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
          <EyebrowLabel className="mb-6 block">COMPASS ITS · BLOG</EyebrowLabel>
          <h1 className="font-archivo font-light text-paper leading-none tracking-[-0.04em] text-[44px] md:text-[60px] lg:text-[72px] max-w-[600px] mb-6">
            Thinking out loud.
          </h1>
          <p className="font-barlow text-body-l text-paper/60 max-w-[480px] leading-relaxed">
            Technology, infrastructure, and what makes IT work in Qatar and the GCC.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-paper py-16 lg:py-24 relative z-[1]">
        <div className="max-w-content mx-auto px-6 lg:px-20">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bracketed bracketed-light bracketed-split raised-light flex flex-col lg:flex-row rounded-lg overflow-hidden transition-shadow duration-300"
              >
                <div className="lg:w-[440px] shrink-0 overflow-hidden bg-ink">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={440}
                    height={260}
                    className="w-full h-[220px] lg:h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="flex-1 p-8 lg:p-10 bg-paper flex flex-col justify-center">
                  <EyebrowLabel className="mb-4 block">{post.category}</EyebrowLabel>
                  <h2 className="font-archivo font-medium text-ink leading-tight tracking-[-0.02em] text-[22px] md:text-[26px] mb-4 group-hover:text-signal transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="font-barlow text-body text-ink/60 leading-[28px] mb-6 max-w-[520px]">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <span className="font-jetbrains text-xs text-ink/40 tracking-eyebrow uppercase">{post.date}</span>
                    <span className="font-jetbrains text-xs text-ink/20">·</span>
                    <span className="font-jetbrains text-xs text-ink/40 tracking-eyebrow uppercase">{post.readTime}</span>
                    <span className="font-jetbrains text-xs text-ink/20">·</span>
                    <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase group-hover:underline underline-offset-4">
                      Read the article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
