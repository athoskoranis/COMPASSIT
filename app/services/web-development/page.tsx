import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundStatic'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Web Development Services in Qatar, GCC — Compass IT Solutions',
  description: 'Compass IT Solutions offers custom website design, web application development, ecommerce solutions, and WordPress development for businesses across Qatar and the GCC.',
  alternates: { canonical: 'https://compass-its.com/services/web-development' },
}

const services = [
  {
    title: 'Custom Website Designing',
    description: 'Our experienced web developers specialise in building lead-generating websites that accommodate the latest technologies, thus allowing businesses to always stay ahead of the digital curve and stand out from the rest.',
  },
  {
    title: 'Prototyping & UI',
    description: 'We conceptualize and develop websites based on detailed wire-framing, UX-driven design and close collaboration so we can develop a powerful platform that establishes your credibility and drives home your brand message.',
  },
  {
    title: 'Web Application Development',
    description: 'Having created powerful web applications for businesses of all shapes, app developers at Compass IT Solutions can start building platforms from scratch and customise your mobile application to suit your unique business needs.',
  },
  {
    title: 'WordPress Development',
    description: 'Flexibility and user-experience lie at the core of every WordPress project we undertake. We have helped hundreds of businesses build custom-made content management systems. Partner with us to develop a fast and reliable WordPress website.',
  },
  {
    title: 'Ecommerce Solution',
    description: 'Drawing on compelling design and cutting edge development, our certified developers know what it takes to create bespoke online stores that can convert your visitors into loyal customers and grow your business.',
  },
  {
    title: 'Custom CMS',
    description: 'If your requirement is not able to meet with the product we can develop a custom CMS for you. With a custom CMS, you have control over the platform\'s functionality, interface and updates.',
  },
  {
    title: 'PSD to HTML Conversion',
    description: 'We never undermine the importance of precision. Hence you can be sure that our conversion processes promote multi-browser compatibility & support with responsive as well as fidelity performance.',
  },
  {
    title: 'Website Testing & QA Checks',
    description: 'None of the websites that we build are ever deployed without being first put through a series of systematic, rigid and thorough QA checks that ensure that they are free of any bugs or issues that might affect customer engagement or brand value.',
  },
]

const process = [
  {
    title: 'Scope Of Work Analysis',
    description: 'We discuss your project idea and requirements to understand what exactly you want. We\'ll conduct our own research regarding target audience demographics and behaviour so we can optimize site development and design for the right people.',
  },
  {
    title: 'Prototyping',
    description: 'Using the information gathered from phase one, it is time to put it together and make a detailed website plan. At this point, a site map is developed. Our team usually creates one or more prototypes and you will be informed throughout all the design and development stages.',
  },
  {
    title: 'Coding',
    description: 'At this point, we\'ll be ready with the design and move ahead. It requires extra development effort to translate it into HTML/CSS, and then to add a layer of animations or JavaScript, depending on the complexity of the design.',
  },
  {
    title: 'Testing',
    description: 'When the content and the visuals are in place, the testing process can be started. Every page has to be tested to make sure that all links are working and the website is displayed correctly in different browsers.',
  },
  {
    title: 'Launch',
    description: 'Once you give us the final approval, it is time for the website to go live. But before that, the site will be run-through for one last time to confirm that all files have been uploaded correctly, and that the site is fully functional.',
  },
]

const whyPoints = [
  'Agile methodology — every step of our website development project aims at providing maximum value to our customers with a low risk of failure',
  'Transparent Communication — we relay our progress to our clients about their project\'s advancement and set clear expectations for delivery',
  'On-time delivery — we believe in on-time delivery of projects with 95% client satisfaction',
  'Flexible engagement models — hire for full-time, part-time, fixed-cost, or developer by the hour',
  'Reliable and highly skilled developers — our cutting-edge solutions, implementation of the latest technologies and trends, and creativity will seamlessly synchronize with your project needs',
  'Maintenance and Support — we are always here to give you 24/7 assistance and deliver proactive solutions for your queries',
]

export default function WebDevelopmentPage() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>
        <ServiceHero
          eyebrow="WEB DEVELOPMENT · QATAR · GCC"
          title="Web Development Services in Qatar, GCC"
          subtitle="Developing interactive website solutions that deliver tangible business results. Grow your customer base, get more leads and expand your reach with Compass IT Solutions Web Development services."
          primaryCta="Request a call back"
        />
        <ServiceSubServices
          eyebrow="OUR SERVICES"
          heading="Come to us for all your Web Design & Development projects"
          intro="For over 10 years, Compass IT Solutions has been delivering engaging website solutions for leading organizations across various industries. Our website development experts have been delivering impactful and engaging web solutions from creating mobile web development solutions and responsive website designs to building custom e-commerce and intranet experiences."
          items={services}
        />
        <ServiceSubServices
          eyebrow="OUR PROCESS"
          heading="Our Website Development Process"
          items={process}
        />
        <ServiceWhyUs
          eyebrow="WHY COMPASS ITS"
          heading="Choose Compass IT Solutions for Website Development"
          points={whyPoints}
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
