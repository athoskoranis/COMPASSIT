import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'AI Development & Consulting Services Qatar, Saudi Arabia, UAE — Compass IT Solutions',
  description: 'Compass IT Solutions provides end-to-end AI development and consulting services in Qatar and the GCC — machine learning, AI chatbots, data annotation, and process automation.',
  alternates: { canonical: 'https://compass-its.com/services/ai-workflows' },
}

const offerings = [
  {
    title: 'AI Consulting Services',
    description: 'Leverage our AI consulting services to help you harness the potential of artificial intelligence aligned towards maximizing your business ROI as well as the productivity of your employees. Our AI consultants establish a roadmap to adopt AI technologies best suited for your business.',
  },
  {
    title: 'AI as a Service',
    description: 'We do not propose an AI strategy plan without knowing your business needs, your future goals, and room for improvement. After diving deep into your current systems, we discuss various high-tech solutions that can ease your business challenges guiding you toward choosing a budgeted AI solution.',
  },
  {
    title: 'AI Development Services',
    description: 'Our AI specialists at Compass IT Solutions help retool your existing systems and enhance your business capabilities. Whether it\'s a simple chatbot or sales and marketing operations automation through machine learning — our custom AI Development services help your business reach a new level.',
  },
  {
    title: 'AI Chatbots',
    description: 'Integration of AI-powered chatbots into your CRM improves your business relationships with your customers and prospective clients. Proven AI intelligence gives a more solution-driven approach, and it becomes easier if some of the less complex queries are answered by the chatbots leading to quick responses.',
  },
  {
    title: 'AI Integration',
    description: 'AI solutions maximize ROI after successful yet seamless integration of the AI custom software solution in the existing system of your business. For reaping the best benefits, we integrate the ML models, integrate voice AI into conversational CX, and integrate AI-based OCR-SDK.',
  },
  {
    title: 'AI Machine Learning',
    description: 'Our machine learning experts help you see the big picture while helping you forecast the future, recommend industry-leading products, detect anomalies and detect trends that are necessary to drive business growth. Leverage the data-rich machine learning solutions to bring newer opportunities.',
  },
  {
    title: 'AI Support and Maintenance',
    description: 'Compass IT Solutions offers round-the-clock support services for your AI-powered solutions and applications. Our team of AI experts and engineers plays an important role in managing the security status and vulnerability of your business assets during the entire AI integration process.',
  },
  {
    title: 'AI Data Annotation',
    description: 'Compass IT Solutions aims to augment, annotate and label business data accurately using advanced tools and human skills to make the data recognizable by computer visions or machines. Services include Semantic segmentation, Image annotation, Video Annotation, Text Annotation, and Audio Annotation.',
  },
]

const whyPoints = [
  'Complete AI Consulting Services — outstanding and knowledgeable staff to integrate AI solutions into your business setup without interfering with business continuity',
  'AI Engineers with certification — rely on the knowledge and skills of certified and specialized AI experts',
  '24-hour upkeep and assistance — our AI specialists offer round-the-clock support to help you settle into the new environment after a successful deployment',
  'Committed Project Manager — a project manager at Compass IT Solutions monitors your complete AI development and provides status updates and support',
  'No downtime — there is no business interruption or downtime for your IT operations during the whole testing, deployment, integration, and implementation phase',
  'Technological Innovation — Compass IT Solutions informs you of the most recent upgrades and assists you in making use of them in accordance with the future needs of your company',
]

export default function AIWorkflowsPage() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>
        <ServiceHero
          eyebrow="AI DEVELOPMENT · QATAR · GCC"
          title="AI Development & Consulting Services Qatar, Saudi Arabia, UAE"
          subtitle="Improve Business Outcomes With AI Development & Consulting Services in GCC. Machine learning, content classification, deep learning, and process automation — AI helps enhance your business capabilities and makes you hit your business goals efficiently."
          primaryCta="Connect with our AI team"
        />
        <ServiceSubServices
          eyebrow="OUR OFFERINGS"
          heading="Stay One Step Ahead Of Your Competition With Compass IT Solutions AI Services"
          intro="At Compass IT Solutions, we bring innovative integration and orchestration of robotic, intelligent, and autonomous capabilities to make your business stand out. We provide end-to-end AI development and consulting services to clients in and around the GCC."
          items={offerings}
        />
        <ServiceWhyUs
          eyebrow="WHY COMPASS ITS"
          heading="What Makes Compass IT Solutions the Best Option for AI Services"
          intro="AI solutions make your business unlock its true potential and we at Compass IT Solutions, help you strategize on how to utilize AI to give its maximum benefits to your business. Our AI consultants will work out the best long-term AI strategy to help you create a sustainable, cohesive AI-driven ecosystem."
          points={whyPoints}
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
