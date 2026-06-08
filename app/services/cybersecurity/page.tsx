import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import ServiceHero from '@/components/sections/ServiceHero'
import ServiceSubServices from '@/components/sections/ServiceSubServices'
import ServiceWhyUs from '@/components/sections/ServiceWhyUs'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Top Cyber Security Service Provider in Qatar, GCC — Compass IT Solutions',
  description: 'Compass IT Solutions offers full-scale cybersecurity consulting services in Qatar, Saudi Arabia, UAE — risk assessment, VAPT, ISO compliance, and more.',
  alternates: { canonical: 'https://compass-its.com/services/cybersecurity' },
}

const subServices = [
  {
    title: 'Risk Assessment',
    description: 'Identifying loopholes and other vulnerabilities in your IT system helps you evaluate potential impacts on data integrity, confidentiality, and availability. By implementing the appropriate countermeasures under our advice, the risks and possible consequences of any breach can be minimized.',
  },
  {
    title: 'Cybersecurity',
    description: 'We assist our clients in approaching cybersecurity strategically, reducing the associated risks, and strengthening their information security. We can help you align your security program by making use of all of our strategic or technology service capabilities.',
  },
  {
    title: 'Security Assessment',
    description: 'The process of assessing an organization\'s compliance with pertinent cybersecurity standards, laws, and best practices is known as a security assessment review audit. An organization\'s cybersecurity controls should be evaluated for efficacy, and any non-compliance or vulnerabilities that should be fixed should be found during such a review.',
  },
  {
    title: 'Impact Assessment',
    description: 'A procedure that assesses the possible effects of security incidents or vulnerabilities on an organization\'s information technology systems, assets, and activities. Its objectives are to identify and rank risks, comprehend the possible repercussions of those risks, and create suitable mitigation plans.',
  },
  {
    title: 'Security Implementations & Trainings',
    description: 'Protecting an organization\'s data, networks, and systems against illegal access, security breaches, and other dangers requires putting in place strong IT security procedures. Network infrastructure and data will be protected by putting firewalls, VPNs, and intrusion detection and prevention systems (IDPS) into place.',
  },
  {
    title: 'Business Continuity Planning',
    description: 'Imagine discovering a significant data breach or a natural disaster when you woke up the following day. Such disruptions will have a significant effect on your company. For the benefit of your business, you must not give up; instead, you must get up and get back into shape.',
  },
  {
    title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
    description: 'Businesses can remain resolute in the face of lawful cyberattacks thanks to Vulnerability and penetration testing. This test will identify the weak points in every piece of technology you own, including computers, servers, firewalls, and networks. Any business, regardless of size, must use VAPT to find its weak points and compromised areas.',
  },
  {
    title: 'ISO Compliance',
    description: 'We help you become compliant with various ISO certifications and obtain them. The International Standards Organization, or ISO, is a separate entity that develops the standards for the group. A standard is the effectiveness, safety, and caliber of a business\'s goods or services.',
  },
  {
    title: 'Data Privacy and Security',
    description: 'Organizations nowadays place a higher priority on evolving customer privacy expectations, stakeholder profitability demands, and tighter privacy rules. Consequently, there is a growing focus on personal data, and companies have to navigate a complicated landscape of regulatory, reputational, and data privacy risks.',
  },
]

const whyPoints = [
  '75+ clients across GCC — Qatar, Saudi Arabia and UAE',
  'Strong domain knowledge in BFSI, healthcare, telecom, and the public sector',
  'Flexible security solutions that greatly reduce breach risks and provide significant compliance help',
  'Tools and frameworks: EDR, SOAR, SIEM',
  'CISSP, OSCP, CEH Certified resources',
  'Ethical hacking and audit specialists',
  'Compliance knowledge for the specific sector',
  'Strategic frameworks backed by automation and analytics',
]

const credentials = [
  {
    title: 'Certified Information Systems Auditor (CISA)',
    description: 'CISA is a globally recognized certification issued by ISACA. It validates professionals\' knowledge and expertise in auditing, controlling, and securing information systems.',
  },
  {
    title: 'ISO 27001',
    description: 'ISO 27001 is an international standard for information security management systems. Organizations that achieve ISO 27001 certification demonstrate their commitment to effectively managing information security risks.',
  },
  {
    title: 'COBIT',
    description: 'COBIT is a framework developed by ISACA that provides guidelines and best practices for IT governance and management. It helps organizations align IT with business objectives, ensure effective risk management, and optimize IT processes.',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    description: 'The EC-Council grants the CEH certification to individuals who can demonstrate their ability to evaluate the security posture of target systems using the same tools and knowledge as malicious hackers, but in a legal and ethical manner.',
  },
  {
    title: 'NIST Cybersecurity Framework',
    description: 'The NIST Cybersecurity Framework provides a set of guidelines and best practices for managing and improving an organization\'s cybersecurity posture. It helps organizations identify, protect, detect, respond to, and recover from cybersecurity incidents.',
  },
]

const faqs = [
  {
    question: 'What services does Compass IT Solutions offer?',
    answer: 'Compass IT Solutions provides a wide range of cybersecurity services including Vulnerability Assessment and Penetration Testing (VAPT), Risk Assessment, Cybersecurity, Security Assessment, Security Implementations & Training, Data Privacy and Security, and Business Continuity Planning.',
  },
  {
    question: 'Why should businesses choose Compass IT Solutions for cybersecurity consulting?',
    answer: 'Compass IT Solutions combines certified cybersecurity professionals, advanced tools such as SIEM and SOAR, and risk-based security frameworks to help organizations build strong and scalable security infrastructures.',
  },
  {
    question: 'What is VAPT and why is it important?',
    answer: 'Vulnerability Assessment and Penetration Testing (VAPT) identifies security weaknesses in systems, networks, and applications. It helps organizations detect vulnerabilities before hackers exploit them and strengthens overall cybersecurity defenses.',
  },
]

export default function CybersecurityPage() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>
        <ServiceHero
          eyebrow="CYBERSECURITY · QATAR · GCC"
          title="Top Cyber Security Service Provider in Qatar, GCC"
          subtitle="Information system auditing is getting more popular around the globe and is now the auditing focus. A leading provider of information audits with numerous extra benefits is Compass IT Solutions."
          primaryCta="Book a Consultation"
          secondaryCta="Secure your business"
        />
        <ServiceSubServices
          eyebrow="OUR SERVICES"
          heading="Comprehensive Cyber Security Consulting Services Qatar, Saudi Arabia, UAE"
          intro="Compass IT Solutions offers full-scale cybersecurity consultant services in Qatar, GCC in line with your intended business vision. One of the leading cybersecurity companies in Qatar, Saudi Arabia, UAE — our services enable organizations to evolve from reactive defenses to proactive cyber resilience."
          items={subServices}
        />
        <ServiceWhyUs
          eyebrow="WHY COMPASS ITS"
          heading="Why Businesses Trust Compass IT Solutions for Cybersecurity in Qatar, Saudi Arabia, UAE"
          intro="Compass IT Solutions is not just a vendor; we are a long-term cybersecurity service provider in GCC. Our flexible and business-aligned approach truly sets us apart as the top cyber security service provider in Qatar, Saudi Arabia, UAE."
          points={whyPoints}
          credentialsHeading="Credentials and Standards for Cybersecurity Services"
          credentials={credentials}
        />
        <ServiceFAQ faqs={faqs} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
