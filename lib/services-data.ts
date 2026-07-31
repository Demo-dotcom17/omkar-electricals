export interface Service {
  id: string
  slug: string
  title: string
  intro: string
  description: string
  fullDescription: string
  features: string[]
  whyChoose: string[]
  image: string
  metaTitle: string
  metaDescription: string
  isAdditional?: boolean
}

export const servicesData: Service[] = [
  {
    id: 'residential-wiring',
    slug: 'residential-wiring',
    title: 'Residential Wiring',
    intro: 'Safe and efficient electrical solutions for your home',
    description: 'Complete electrical wiring solutions for residential properties with safety compliance and energy efficiency. We specialize in internal wiring systems, safety installations, and energy-efficient solutions that keep your home running smoothly. Our team ensures all work meets current electrical codes and industry standards.',
    fullDescription: 'At Omkar Electricals, we understand that your home\'s electrical system is critical for both comfort and safety. Whether you\'re building a new home or upgrading an existing one, we provide comprehensive wiring solutions tailored to your needs. Our experienced electricians handle everything from initial design to final installation and testing.',
    features: [
      'Internal wiring systems',
      'Safety installations and grounding',
      'Energy-efficient solutions',
      'Emergency repairs and troubleshooting',
      'Modern switchboard installation',
      'Smart home integration',
    ],
    whyChoose: [
      'Licensed and certified professionals',
      'Guaranteed safety compliance',
      'Competitive pricing for homeowners',
      'Same-day emergency services available',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rnKj9rabCjzGR23dUL3ObWLvzOhJYp.png',
    metaTitle: 'Residential Wiring Services - Omkar Electricals',
    metaDescription: 'Expert residential electrical wiring solutions with safety compliance and energy efficiency. Professional installation, repairs, and smart home integration.',
  },
  {
    id: 'commercial-installation',
    slug: 'commercial-installation',
    title: 'Commercial Installation',
    intro: 'Professional electrical systems for businesses',
    description: 'Professional electrical installation for commercial and office spaces with minimal disruption to your business operations. We handle office lighting systems, power distribution, fire safety systems, and smart building solutions. Our work ensures compliance with commercial electrical codes.',
    fullDescription: 'Commercial properties require specialized electrical expertise. We work with businesses of all sizes to design and install electrical systems that support your operations efficiently. Our team minimizes downtime through careful planning and professional execution, ensuring your business stays operational.',
    features: [
      'Office lighting systems and design',
      'Power distribution and load management',
      'Fire safety and emergency systems',
      'Smart building solutions and automation',
      'Data and communication cabling',
      'Energy management systems',
    ],
    whyChoose: [
      'Experienced with large-scale projects',
      'Minimal business interruption',
      'Commercial code compliance',
      'Maintenance contract options',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yM7hpvqiOeOtvzCC8prcRoP6sKOI9P.png',
    metaTitle: 'Commercial Electrical Installation - Omkar Electricals',
    metaDescription: 'Professional commercial electrical installation, lighting design, power distribution, and smart building solutions for businesses.',
  },
  {
    id: 'industrial-electrical-work',
    slug: 'industrial-electrical-work',
    title: 'Industrial Electrical Work',
    intro: 'Heavy-duty electrical systems for industrial operations',
    description: 'Heavy-duty electrical systems and infrastructure for industrial applications. We handle large scale installations, motor control systems, industrial automation, and power backup systems. Our expertise extends to complex industrial environments with demanding electrical requirements.',
    fullDescription: 'Industrial facilities have unique electrical needs. We design and install robust electrical systems capable of handling high-load operations and maintaining reliability 24/7. Our team stays updated on the latest industrial electrical standards and best practices.',
    features: [
      'Large scale installations and upgrades',
      'Motor control systems and VFDs',
      'Industrial automation and controls',
      'Power backup and UPS systems',
      'Three-phase power systems',
      'Panel design and installation',
    ],
    whyChoose: [
      'Expertise in complex systems',
      'Downtime minimization strategies',
      'Industrial safety certifications',
      'Preventive maintenance programs',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-levoq9Jx1uGLsRFZ7HtDL5b0I6XeLG.png',
    metaTitle: 'Industrial Electrical Work - Omkar Electricals',
    metaDescription: 'Heavy-duty industrial electrical systems, motor control, automation, and power backup solutions for manufacturing facilities.',
  },
  {
    id: 'maintenance-repair',
    slug: 'maintenance-repair',
    title: 'Maintenance & Repair',
    intro: 'Keep your electrical systems running reliably',
    description: 'Professional maintenance and repair services to keep your electrical systems running smoothly and prevent costly downtime. We provide regular maintenance, emergency repairs, system diagnostics, and preventive care. Our proactive approach saves you money in the long run.',
    fullDescription: 'Regular maintenance is key to preventing electrical problems before they occur. We offer comprehensive maintenance programs tailored to your property type and usage patterns. Our emergency repair services are available when unexpected issues arise.',
    features: [
      'Regular maintenance contracts',
      'Emergency repair services (24/7)',
      'System diagnostics and troubleshooting',
      'Preventive care and inspections',
      'Equipment testing and certification',
      'Compliance audits and upgrades',
    ],
    whyChoose: [
      'Rapid response times',
      'Qualified, experienced technicians',
      'Transparent pricing for repairs',
      'Preventive maintenance packages',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SDaKRqCMcXTkpFVVFDWW7dkJ1NXUi1.png',
    metaTitle: 'Electrical Maintenance & Repair Services - Omkar Electricals',
    metaDescription: '24/7 emergency repair and preventive maintenance services for residential, commercial, and industrial electrical systems.',
  },
  {
    id: 'turnkey-projects',
    slug: 'turnkey-projects',
    title: 'Turnkey Projects',
    intro: 'Complete electrical solutions from concept to completion',
    description: 'Complete electrical project execution from design to installation and commissioning. We handle every aspect of your electrical project, ensuring seamless integration and optimal performance. Our turnkey approach means you have one point of contact for your entire project.',
    fullDescription: 'When you need a comprehensive electrical solution, our turnkey project management ensures everything runs smoothly from start to finish. We handle planning, design, permitting, installation, and final commissioning. Our project managers keep you informed every step of the way.',
    features: [
      'Complete project management',
      'Design and engineering services',
      'Procurement and vendor management',
      'Full installation and commissioning',
      'Quality assurance and testing',
      'Post-installation support',
    ],
    whyChoose: [
      'Single point of responsibility',
      'Fixed pricing models available',
      'Guaranteed timelines',
      'Comprehensive project documentation',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FRJ7GvdlD3SRKwVCRq5TBUCtCE86MA.png',
    metaTitle: 'Turnkey Electrical Projects - Omkar Electricals',
    metaDescription: 'Complete turnkey electrical project management from design through installation and commissioning with quality assurance.',
  },
  {
    id: 'safety-compliance',
    slug: 'safety-compliance',
    title: 'Safety Compliance',
    intro: 'Ensure your systems meet all electrical safety standards',
    description: 'Ensure your electrical systems meet all safety standards and regulations. We conduct thorough safety audits, compliance checks, certification, and standard implementation. Our commitment to safety protects your property, people, and investment.',
    fullDescription: 'Electrical safety is not negotiable. We help you navigate complex safety regulations and ensure your systems are fully compliant. Our audits identify potential hazards and our recommendations bring everything up to code.',
    features: [
      'Safety audits and inspections',
      'Compliance checks and certifications',
      'Standards implementation and upgrades',
      'Hazard identification and mitigation',
      'Code compliance verification',
      'Safety training and documentation',
    ],
    whyChoose: [
      'Expert knowledge of electrical codes',
      'Comprehensive audit reports',
      'Remediation planning included',
      'Peace of mind through compliance',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-37HJ96LwKYeu6n8DzBpXGkHcnGQeTm.png',
    metaTitle: 'Electrical Safety Compliance Services - Omkar Electricals',
    metaDescription: 'Safety audits, compliance checks, and code implementation to ensure your electrical systems meet all safety standards.',
  },
  {
    id: 'earthing-lightning-protection',
    slug: 'earthing-lightning-protection',
    title: 'Earthing and Lightning Protection System',
    intro: 'Reliable grounding and lightning protection solutions for maximum safety',
    description: 'Protect your property, equipment, and personnel from electrical faults and lightning strikes with professionally designed earthing and lightning protection systems. We provide complete installation, testing, and maintenance in accordance with industry safety standards, ensuring long-term protection for residential, commercial, and industrial facilities.',
    fullDescription: 'Earthing and lightning protection systems are critical infrastructure that safeguard buildings and lives during electrical faults and lightning strikes. Our expert team designs custom solutions tailored to your property\'s specific needs, ensuring compliance with IS safety standards and international best practices. We handle everything from initial site assessment to installation, testing, and ongoing maintenance.',
    features: [
      'Chemical and conventional earthing',
      'Lightning arrestor installation',
      'Earth pit testing and maintenance',
      'Equipotential bonding systems',
      'Surge protection solutions',
      'Compliance with IS safety standards',
    ],
    whyChoose: [
      'Expert grounding system design',
      'Complete safety certification',
      'Comprehensive testing protocols',
      'Long-term maintenance support',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vppPejJ9fqUc7uWZzrKSzWNP619BMi.png',
    metaTitle: 'Earthing and Lightning Protection Systems - Omkar Electricals',
    metaDescription: 'Professional earthing and lightning protection installation, testing, and maintenance for residential, commercial, and industrial properties.',
    isAdditional: true,
  },
  {
    id: 'fire-protection-services',
    slug: 'fire-protection-services',
    title: 'Fire Protection Services',
    intro: 'Comprehensive fire safety systems for buildings and industries',
    description: 'We design, install, and maintain fire protection systems that safeguard people, assets, and infrastructure. Our solutions comply with statutory fire safety regulations and are customized for commercial, industrial, and institutional projects.',
    fullDescription: 'Fire protection is a critical component of building safety. Our comprehensive fire protection systems combine detection, suppression, and emergency response capabilities to provide complete safety coverage. We work with building owners and managers to design solutions that meet regulatory requirements while minimizing disruption to operations.',
    features: [
      'Fire alarm systems',
      'Smoke and heat detectors',
      'Emergency lighting systems',
      'Fire suppression system integration',
      'Periodic testing and maintenance',
      'Safety inspections and compliance',
    ],
    whyChoose: [
      'Full regulatory compliance',
      'Advanced detection technology',
      'Reliable suppression systems',
      'Regular maintenance programs',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fq7hqIWgktjNaYzmu2vFUc7Xo380Fh.png',
    metaTitle: 'Fire Protection Services - Omkar Electricals',
    metaDescription: 'Comprehensive fire protection systems including alarms, detection, suppression, and emergency lighting for buildings and industries.',
    isAdditional: true,
  },
  {
    id: 'data-cabling',
    slug: 'data-cabling',
    title: 'Data Cabling',
    intro: 'Structured cabling solutions for reliable network connectivity',
    description: 'We provide structured data cabling services that ensure high-speed, secure, and organized communication networks. Our solutions support offices, commercial buildings, educational institutions, and industrial facilities with scalable network infrastructure.',
    fullDescription: 'Reliable network infrastructure is essential for modern businesses. Our data cabling services combine professional installation with advanced testing to ensure your network performs optimally. We design scalable solutions that grow with your business, from small office setups to large enterprise deployments.',
    features: [
      'CAT6 and CAT6A cabling',
      'Fiber optic cabling',
      'Network rack installation',
      'Patch panel termination',
      'Cable testing and certification',
      'LAN and office network setup',
    ],
    whyChoose: [
      'Professional installation standards',
      'High-speed network performance',
      'Future-proof scalability',
      'Complete testing certification',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B5ZyuiIg4IUnUj0gMf7sStyxSKmyzg.png',
    metaTitle: 'Data Cabling Solutions - Omkar Electricals',
    metaDescription: 'Structured data cabling services with CAT6, CAT6A, and fiber optic solutions for reliable network connectivity.',
    isAdditional: true,
  },
  {
    id: 'lt-cable-laying',
    slug: 'lt-cable-laying',
    title: 'LT Cable Laying Services',
    intro: 'Professional low-tension cable installation for safe power distribution',
    description: 'We specialize in the laying, termination, and testing of LT cables for residential, commercial, and industrial projects. Our experienced team ensures safe installation practices, minimal downtime, and reliable power distribution systems.',
    fullDescription: 'Low-tension cable installation requires precision, safety expertise, and careful planning to minimize disruption. Our team handles everything from route planning and excavation to cable laying, jointing, and final commissioning. We follow industry best practices to ensure your power distribution infrastructure is safe, reliable, and future-ready.',
    features: [
      'Underground cable laying',
      'Cable tray and trench installation',
      'Cable jointing and termination',
      'Route planning and excavation',
      'Cable testing and commissioning',
      'Preventive maintenance services',
    ],
    whyChoose: [
      'Expert installation practices',
      'Minimal operational disruption',
      'Complete project management',
      'Comprehensive testing procedures',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-paa61isPVHRnA5v5sDEiW6qKvIATJY.png',
    metaTitle: 'LT Cable Laying Services - Omkar Electricals',
    metaDescription: 'Professional underground LT cable laying, termination, and testing for residential, commercial, and industrial power distribution.',
    isAdditional: true,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug)
}

export function getPrimaryServices(): Service[] {
  return servicesData.filter((service) => !service.isAdditional)
}

export function getAdditionalServices(): Service[] {
  return servicesData.filter((service) => service.isAdditional)
}
