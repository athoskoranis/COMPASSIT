'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

const posts = [
  {
    slug: 'generative-ai-consulting-qatar',
    category: 'AI & MANAGED IT',
    title: 'Generative AI Consulting in Qatar: Turning the Hype Into Something Useful',
    excerpt:
      'Qatar is not short on AI ambition. What is less clear, for most private businesses, is how to turn that momentum into something that actually helps operations. Good consulting is mostly about avoiding projects that demo well and deliver little.',
    date: 'July 2026',
    readTime: '6 min read',
    image: '/images/blog/blog5-ai-meeting-team.jpg',
  },
  {
    slug: 'cloud-migration-services-qatar',
    category: 'CLOUD SOLUTIONS',
    title: 'Cloud Migration in Qatar: Data Residency, the Local Region, and Getting It Right',
    excerpt:
      "With an in-country Azure region now operating in Qatar, the calculation around cloud migration has changed. That doesn't make migration simple. It makes it worth doing properly.",
    date: 'July 2026',
    readTime: '5 min read',
    image: '/images/blog/blog4-cloud-datacenter.jpg',
  },
  {
    slug: 'penetration-testing-services-qatar',
    category: 'CYBERSECURITY',
    title: 'Penetration Testing in Qatar: What It Is and Why NIA Compliance Increasingly Expects It',
    excerpt:
      "A vulnerability scan tells you which doors look unlocked. A penetration test tells you whether an attacker could actually walk through them. Here is what a proper engagement covers, and why Qatar's NIA framework increasingly expects one.",
    date: 'July 2026',
    readTime: '5 min read',
    image: '/images/blog/blog3-pentest-monitors.jpg',
  },
  {
    slug: 'ai-agents-for-business-gcc',
    category: 'AI & MANAGED IT',
    title: 'AI Agents for Business: What They Do, and What GCC Companies Should Expect',
    excerpt:
      'AI agents carry out multi-step tasks on your behalf — deciding what to do next based on the result of the last step. Here is what holds up in production, and what the adoption numbers actually say.',
    date: 'July 2026',
    readTime: '5 min read',
    image: '/images/blog/blog2-ai-agent-flowchart.jpg',
  },
  {
    slug: 'ai-workflow-automation-gcc-businesses',
    category: 'AI & MANAGED IT',
    title: 'How AI Workflow Automation Is Changing the Way GCC Businesses Operate',
    excerpt:
      'The conversation has shifted from "should we look at AI" to "which workflows should we automate first." For mid-sized and growing businesses, that second question is the more useful one.',
    date: 'June 2026',
    readTime: '4 min read',
    image: '/images/blog/blog1-workflow-dashboard.jpg',
  },
]

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
                className="group flex flex-col lg:flex-row rounded-lg overflow-hidden border-t border-r border-b border-ink/10 hover:shadow-glow-signal-sm transition-shadow duration-300"
                style={{ borderLeft: '3px solid #2BB3E6' }}
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
