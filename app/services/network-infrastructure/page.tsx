import type { Metadata } from 'next'
import NetworkInfrastructurePageClient from './client'

export const metadata: Metadata = {
  title: 'Network Infrastructure Solutions in Qatar, GCC',
  description: 'Network infrastructure solutions in Qatar — routers, switches, LAN & WAN, firewall solutions, managed network services, and on-site support across the GCC.',
  alternates: { canonical: '/services/network-infrastructure' },
  openGraph: {
    title: 'Network Infrastructure Solutions in Qatar, GCC | Compass IT Solutions',
    description: 'Network infrastructure solutions in Qatar — routers, switches, LAN & WAN, firewall solutions, and managed network services.',
    url: '/services/network-infrastructure',
  },
}

export default function NetworkInfrastructurePage() {
  return <NetworkInfrastructurePageClient />
}
