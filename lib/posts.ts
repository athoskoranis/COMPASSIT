export type Post = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
}

// Single source of truth for the blog. Both the blog index and the hero rail
// read from here, so adding a post surfaces it in both places — the hero cannot
// silently go stale. Newest first.
export const posts: Post[] = [
  {
    slug: 'cloud-artificial-intelligence-it-innovation',
    category: 'CLOUD SOLUTIONS',
    title: 'How Cloud Artificial Intelligence Is Driving IT Innovation?',
    excerpt:
      'Cloud artificial intelligence is turning national AI ambition in Qatar and the Gulf into something IT teams can actually deploy. Here\'s what platforms like Google Cloud AI Platform change, and what still depends on solid IT governance.',
    date: 'August 2026',
    readTime: '6 min read',
    image: '/images/blog/cloud-artificial-intelligence-it-innovation-1.jpg',
  },
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

export const latestPost = posts[0]
