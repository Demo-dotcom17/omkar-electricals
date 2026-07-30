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
]

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug)
}
