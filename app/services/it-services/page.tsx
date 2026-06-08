import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundStatic'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Best IT Service Company In Qatar, GCC — Compass IT Solutions',
  description: 'Compass IT Solutions provides comprehensive end-to-end IT services and IT solutions to businesses across the GCC. Onsite and remote IT support tailored to your business needs.',
  alternates: { canonical: 'https://compass-its.com/services/it-services' },
}

const subServices = [
  {
    title: 'Managed IT Support',
    description: 'Compass IT Solutions is a trusted and reputable managed IT Support Company in Qatar. We help your business grow to the highest level without IT obstacles, addressing every challenge that hinders your growth.',
  },
  {
    title: 'Onsite & Remote IT Support',
    description: 'Contact us for reliable onsite and remote IT support solutions tailored to meet your business needs in Qatar. Our IT support is prompt and readily available — simply submit a request, and we\'ll get back to you without delay.',
  },
  {
    title: 'IT Hardware & Software Supply',
    description: 'As a trusted IT supplier in Qatar, Compass IT Solutions provides a comprehensive selection of genuine hardware and software solutions, including servers, laptops, networking devices, printers, and advanced security systems from globally recognized brands.',
  },
  {
    title: 'Laptop & Computer Support',
    description: 'We serve our clients with the best onsite IT solutions, IT services, and IT support along with laptop services and computer support services tailored to meet your business needs.',
  },
  {
    title: 'IT AMC (Annual Maintenance Contracts)',
    description: 'Our Annual Maintenance Contracts ensure your IT infrastructure stays in peak condition year-round. We provide proactive monitoring, scheduled maintenance, and rapid response support under one fixed annual agreement.',
  },
  {
    title: 'IT Network Solutions',
    description: 'From startups to large enterprises, we deliver cost-effective and scalable IT solutions that match your specific requirements — including complete IT network solutions and infrastructure setup.',
  },
]

const whyPoints = [
  'Our IT support in Qatar is prompt and readily available — simply submit a request, and we\'ll get back to you without delay',
  'On-site IT support service in Qatar — while you focus on your core priorities, we handle your tech issues, ensuring your business runs smoothly without interruptions',
  'Our team of IT experts in Qatar undergoes rigorous training and certification to guarantee top-tier IT services',
  'Our fully equipped and up-to-date 24/7 support team can tackle any technical challenge that a company in Qatar or all over the GCC presents',
  'Fast delivery, expert technical assistance, and tailor-made IT packages that help your business operate efficiently and securely',
  'We understand the vital role that technology plays in your business development and achievements, and we are committed to addressing your IT concerns with trusted solutions',
]

export default function ITServicesPage() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>
        <ServiceHero
          eyebrow="IT SERVICES · QATAR · GCC"
          title="Best IT Service Company In Qatar-GCC"
          subtitle="As a leading IT services company in Qatar, Compass IT Solutions provides comprehensive end-to-end IT services and IT solutions to businesses across the GCC — backed by up-to-date knowledge and expertise in the latest IT technologies."
          primaryCta="Contact us"
        />
        <ServiceSubServices
          eyebrow="OUR SERVICES"
          heading="Make Your Growth — Best IT Support Company In Qatar, GCC"
          intro="Compass IT Solutions is a trusted and reputable managed IT Support Company in Qatar. Our objective is to place our client's needs at the forefront by delivering IT solutions that improve business efficiency, all while minimizing downtime and reducing costs."
          items={subServices}
        />
        <ServiceWhyUs
          eyebrow="WHY COMPASS ITS"
          heading="What Makes Our IT Services and IT Support The Best In the GCC"
          intro="As the leading IT support company in Qatar, we deliver comprehensive, reliable, and future-ready IT solutions to businesses across the GCC. We specialize in complete IT setup services designed to empower your business with technology and peace of mind."
          points={whyPoints}
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
