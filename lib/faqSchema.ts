/**
 * FAQPage schema derived from the same array that ServiceFAQ renders.
 *
 * Google requires FAQ structured data to describe questions that are visible
 * on the page. Seven service pages once carried a hand-written FAQPage node
 * whose questions appeared nowhere in the rendered HTML, and two rendered a
 * different FAQ from the one their schema declared. Generating the node from
 * `serviceData[slug].en.faq` makes that drift impossible: the schema names
 * exactly what the visitor reads, or it names nothing.
 *
 * Returns an array so a page with no FAQ copy contributes nothing to @graph
 * (spread it) rather than a `null` entry.
 */
export type FaqItem = { question: string; answer: string }

export function faqNodes(faqs: FaqItem[] | undefined) {
  if (!faqs || faqs.length === 0) return []
  return [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ]
}
