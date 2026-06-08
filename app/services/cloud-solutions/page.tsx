import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Cloud Consulting Company in Qatar — Compass IT Solutions',
  description: 'Compass IT Solutions provides end-to-end cloud computing services in Qatar and the GCC — cloud migration, infrastructure management, security, and modernization.',
  alternates: { canonical: 'https://compass-its.com/services/cloud-solutions' },
}

const process = [
  {
    title: 'Plan',
    description: 'We discuss your project idea and requirements to understand what exactly you want. Our team works to understand your current systems, future goals, and the room for improvement before recommending any cloud strategy.',
  },
  {
    title: 'Design',
    description: 'We create mockups and workflows that are perfect to give you an app-like feel. Our cloud solutions experts design multiple deployment models in order to keep your business goals at primary focus.',
  },
  {
    title: 'Develop & Testing',
    description: 'We have employed brilliant developers, coders and testers who deliver a bug-free application. Once the development is finished, everything needs to be fully tested before it touches your production environment.',
  },
  {
    title: 'Deployment Testing',
    description: 'We use a streamlined deployment and testing flow that consists of three phases — pre-deploy, deploy and post-deploy — helping us improve quality and eradicate issues at every step.',
  },
  {
    title: 'Optimization',
    description: 'Whether you\'ve recently migrated to the cloud, or you\'ve been operating there for a while now, our team helps you understand exactly where your cloud spend goes and what drives your costs, maximising your ROI.',
  },
  {
    title: 'Maintenance & Support',
    description: 'We send the final project to our client after checking the app\'s functionality and usability. After delivery, we follow up with maintenance and support for the application on an ongoing basis.',
  },
]

const cloudServices = [
  {
    title: 'Cloud Application Development',
    description: 'Our cloud service providers manage everything — from application to data, from runtime to middleware and OS. After a successful readiness assessment and a cloud architecture audit, our DevOps team develops a roadmap for your business migration to cloud.',
  },
  {
    title: 'Cloud Adoption and Migration',
    description: 'Compass IT Solutions Cloud developers and Engineers help businesses access and plan for their digital transformation. We help you identify and prioritise the business\'s immediate modernization opportunities which in addition improves the cloud readiness and transformation roadmap.',
  },
  {
    title: 'Cloud Optimization',
    description: 'A Cloud ecosystem that is optimised — built across network, storage, compute, and operations — drives higher ROI in your business. Compass IT Solutions cloud solutions experts streamline all your IT operations without compromising business performance, security and scalability.',
  },
  {
    title: 'Cloud Infrastructure Management',
    description: 'Compass IT Solutions offers Cloud management services that play an important role in managing the security status and vulnerability of your business assets. The availability of real-time information accelerates the process of decision-making leading to remarkable innovation in your business.',
  },
  {
    title: 'Cloud Computing Security',
    description: 'Advanced threats require advanced Cloud management and security services. Compass IT Solutions provides complete security of your business assets while digitally transforming your business — securing your cloud environment against unauthorised use, DDoS attacks, hackers, malware, and other risks.',
  },
  {
    title: 'Cloud Modernization',
    description: 'Compass IT Solutions helps make your business\'s modernization journey a breeze. We ensure uninterrupted services, enhance product value and brand perception. Incorporating Cloud-based architecture helps you achieve faster time to market and easy, budget-friendly scalability.',
  },
  {
    title: 'Cloud Disaster Management',
    description: 'Compass IT Solutions Cloud Disaster Management Service helps you save time and capital, offers more data backup location options, and provides the best data restoration plans based on your RPO and RTO for your business with minimum recovery time.',
  },
  {
    title: 'Cloud Managed Services',
    description: 'Compass IT Solutions cloud managed service helps you in rapid cloud deployment managed according to your requirement keeping in mind your budgetary goals. We offer enhanced security and compliance capabilities and provide on-going guidance and support from cloud strategy to cloud deployment.',
  },
]

const whyPoints = [
  'At Compass IT Solutions, we create cloud strategies that enhance business cost efficiency, increase business productivity and make collaboration easier',
  'Our all-encompassing cloud computing consulting and implementation services ensure a safe, efficient and high-performing cloud environment',
  'We provide end-to-end cloud computing services to clients in and around the GCC — for startups, enterprises, global brands, and government organisations',
  'Our unparalleled attention to minute details while making your enterprise cloud compliant gives lower operational cost and capping scalability options for a secured future',
  'Portability, Efficiency and Security are the pillars of business operations — we help your business achieve all three through cloud migration',
  'Comprehensive business solutions with extensive automation, self-service capabilities, outstanding security, and infrastructure optimization for better performance and cost savings',
]

export default function CloudSolutionsPage() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>
        <ServiceHero
          eyebrow="CLOUD SOLUTIONS · QATAR · GCC"
          title="Cloud Consulting Company in Qatar"
          subtitle="Making Your Business's Modernization Journey Easier With Our Cloud Services. At Compass IT Solutions, we create cloud strategies that enhance business cost efficiency, increase business productivity and make collaboration easier."
          primaryCta="Contact us"
        />
        <ServiceSubServices
          eyebrow="OUR PROCESS"
          heading="Our Cloud Development Process"
          items={process}
        />
        <ServiceSubServices
          eyebrow="OUR OFFERINGS"
          heading="Make Your Business Agile and Accelerate Growth via Compass IT Solutions Cloud Services in Qatar"
          intro="When your business becomes cloud compliant, it helps maintain data backup, makes disaster recovery easier and lowers business operation costs because data can be mirrored at multiple redundant sites."
          items={cloudServices}
        />
        <ServiceWhyUs
          eyebrow="WHY COMPASS ITS"
          heading="Innovate Your Business With Cloud Solutions in Qatar"
          points={whyPoints}
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
