import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Network Infrastructure Solutions in Qatar, GCC — Compass IT Solutions',
  description: 'Compass IT Solutions provides network infrastructure solutions in Qatar — routers, switches, network security, LAN & WAN implementation, firewall solutions, and managed network services.',
  alternates: { canonical: 'https://compass-its.com/services/network-infrastructure' },
}

const infrastructure = [
  {
    title: 'Routers, Switches & Wireless Devices',
    description: 'It is easy to overlook the importance of these devices while setting up your office network. Estimating the usage and deciding the number of routers needed for sharing a common IP or placing switches to accurately connect multiple devices is easier said than done. Our team of experts are fully equipped to plan out these solutions for you in no time.',
  },
  {
    title: 'Network Security',
    description: 'Your customers today are short of time and need everything now — this means there\'s no room for downtime due to security issues or network failures. We at Compass IT Solutions have just what you need to protect your systems from every imaginable threat so you can work stress free everyday.',
  },
  {
    title: 'Network Monitoring Devices',
    description: 'Simply using high quality devices does not guarantee a smooth running network. Monitoring the added devices and keeping them well maintained is vital to ensure that any potential threats or issues are tackled well in advance and possible system bottlenecks eliminated beforehand.',
  },
]

const services = [
  {
    title: 'Network Assessments',
    description: 'A thorough network assessment will help you identify any cracks in your current system, infrastructure, and security processes. By identifying vulnerabilities, we make it possible to design tailored Network Infrastructure Solutions that enhance your existing setup and improve the overall performance of your network.',
  },
  {
    title: 'Design & Architecture',
    description: 'Once the assessment is complete, the next step is to design an efficient, scalable, and secure system that supports your daily network usage and maximizes productivity by eliminating any network interruptions, drops, or delays. Our team studies your system requirements in detail to develop the most optimum solution.',
  },
  {
    title: 'Managed Network Services',
    description: 'With our dedicated staff on hand, you can forgo your worries of monitoring, supporting, and maintaining your network at all times. Our Network Infrastructure Solutions ensure that the most important component for your business success remains active, secure, and available whenever you need it.',
  },
  {
    title: 'Implementation & Support',
    description: 'It\'s often confusing and at times even overwhelming when you hear about access points and other networking components. But with our Network Infrastructure Solutions, you don\'t need to fret over installation or support issues. Our certified network technicians handle everything for you, ensuring a smooth experience.',
  },
  {
    title: 'LAN & WAN Implementation',
    description: 'When setting up a LAN and WAN infrastructure for any business, it is essential to create a flexible and trusted network that provides the required bandwidth and ensures all available resources operate at optimum levels. Our solutions include installation and support procedures that guarantee the latest technologies are at your disposal.',
  },
  {
    title: 'Firewall Solutions',
    description: 'Be it a small, medium, or large-scale business, firewalls have become an important aspect of every network infrastructure due to the extensive exposure to external and potentially harmful network traffic. Our customized services ensure you are fully equipped with the right tools to handle any possible network attacks.',
  },
  {
    title: 'On-Site Support',
    description: 'We pride ourselves on having a team of well-trained and experienced professionals who maintain high levels of customer service. From copper and optical fiber cabling to switches, routers, LAN & WAN, every aspect of your network infrastructure is handled with utmost care and expertise by our service engineers.',
  },
  {
    title: 'Service-Level Agreements',
    description: 'Our SLA\'s are prepared with much care to provide you with clear and concise information on what we provide as part of our service. Timely responses and allocation of the best of our engineers and well trained personnel for your every need is guaranteed.',
  },
]

const whyPoints = [
  'Businesses today need to be well connected globally and be online at all times — Network Infrastructure Solutions are essential for building a strong backbone that ensures different devices and their users remain connected at all times',
  'Every business is unique in its own way with varied manpower, office layout, equipment usage — without effective Network Infrastructure Solutions, businesses encounter inefficiencies in device usage and delays in network connectivity',
  'With a well planned and customized network design that includes the required on premise hardware and cloud based services in place, you get the best output with minimal effort and investment',
  'An effective network infrastructure plan will even leave room for future growth and development so that you are free to expand your horizons and reach your full potential',
  'From copper and optical fiber cabling to switches, routers, LAN & WAN — every aspect of your network infrastructure is handled with utmost care and expertise by our service engineers',
]

export default function NetworkInfrastructurePage() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>
        <ServiceHero
          eyebrow="NETWORK INFRASTRUCTURE · QATAR · GCC"
          title="Network Infrastructure Solutions in Qatar, GCC"
          subtitle="Best Network Infrastructure Solution Provider in Qatar, GCC. Businesses today need to be well connected globally and be online at all times — we build the strong backbone that keeps your network running."
          primaryCta="Contact us"
        />
        <ServiceSubServices
          eyebrow="HOW WE BUILD"
          heading="How We Build a Resilient Infrastructure"
          items={infrastructure}
        />
        <ServiceSubServices
          eyebrow="HOW WE HELP"
          heading="How Compass IT Solutions Can Help Your Business"
          items={services}
        />
        <ServiceWhyUs
          eyebrow="WHY COMPASS ITS"
          heading="Why Network Infrastructure Is Very Important"
          points={whyPoints}
        />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
