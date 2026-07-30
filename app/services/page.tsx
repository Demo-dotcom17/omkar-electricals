import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BrandCarousel } from '@/components/brand-carousel'

export const metadata = {
  title: 'Our Electrical Services - Omkar Electricals',
  description: 'Explore our comprehensive range of electrical services including residential wiring, industrial installation, maintenance, and more.',
}

const services = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

export default function Services() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-geist">
              Our Electrical Services
            </h1>
            <p className="max-w-2xl font-geist" style={{ fontSize: '17px', color: '#2c3036', textAlign: 'justify' }}>
              Omkar Electricals provides comprehensive electrical services for residential, commercial, governments, institutional and industrial projects. Our experienced team is equipped to handle any electrical challenge with expertise and professionalism.
            </p>
          </div>
        </section>

        {/* Premium Services Sections */}
        <section className="py-8 md:py-12 px-4 bg-background">
          <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0
              const imageFirst = !isEven

              return (
                <div
                  key={service.title}
                  className={`${
                    index > 0 ? 'pt-20 md:pt-32' : ''
                  } ${index < services.length - 1 ? 'pb-20 md:pb-32 border-b border-border' : ''}`}
                >
                  <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${imageFirst ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`${imageFirst ? 'md:col-span-5' : 'md:col-start-8 md:col-span-5'} order-2 ${imageFirst ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-96 md:h-[520px] object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${imageFirst ? 'md:col-span-7' : 'md:col-span-7'} order-1 ${imageFirst ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="space-y-6">
                        <div>
                          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2 font-geist">
                            Premium Service
                          </p>
                          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-geist">
                            {service.title}
                          </h2>
                          <p className="text-lg text-muted-foreground font-geist mb-4">
                            {service.intro}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <p className="text-base text-foreground leading-relaxed font-geist">
                            {service.description}
                          </p>
                          <p className="text-base text-foreground leading-relaxed font-geist">
                            {service.fullDescription}
                          </p>
                        </div>

                        {/* Features */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4 font-geist">
                            What We Provide
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex gap-3 items-start font-geist">
                                <span className="text-accent font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                <span className="text-base text-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Why Choose */}
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-4 font-geist">
                            Why Choose Omkar For This Service
                          </h3>
                          <ul className="space-y-2">
                            {service.whyChoose.map((point) => (
                              <li key={point} className="flex gap-3 items-start font-geist">
                                <span className="text-primary font-bold text-lg flex-shrink-0 mt-0.5">•</span>
                                <span className="text-base text-foreground">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <a
                            href="/contact"
                            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition font-geist"
                          >
                            Request a Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-secondary py-16 md:py-24 px-4 mt-8 md:mt-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 font-geist">
              Additional Services We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-geist">
              {[
                {
                  title: 'Electrical Cable Laying',
                  description: 'Professional cable installation and routing for optimal safety and performance.',
                },
                {
                  title: 'Concealed Wiring',
                  description: 'Hidden wiring solutions that maintain aesthetic appeal while ensuring safety.',
                },
                {
                  title: 'Rewiring and/or upgrading existing facilities',
                  description: 'Upgrade and modernize existing electrical systems for safe, reliable, and efficient performance.',
                },
                {
                  title: 'Routine maintenance',
                  description: 'Regular electrical maintenance to ensure safe, efficient, and uninterrupted operations.',
                },
                {
                  title: 'Solar Installation',
                  description: 'Renewable energy solutions with professional solar panel installation and setup.',
                },
                {
                  title: 'Lighting Design',
                  description: 'Comprehensive lighting solutions tailored to your space and requirements.',
                },
                {
                  title: 'Emergency services',
                  description: 'Immediate electrical assistance for emergencies, ensuring safety and uninterrupted operations.',
                },
                {
                  title: 'Top-to-bottom efficiency analysis',
                  description: 'Detailed electrical efficiency analysis for reliable and cost-effective operations.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Brands & Partners */}
        <BrandCarousel />

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-12 text-center font-geist">
              Why Choose Omkar Electricals?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-geist">
              {[
                {
                  title: 'Expert Team',
                  description: 'Highly skilled and 30+ years of experienced electrical professionals.',
                },
                {
                  title: 'Quality Assurance',
                  description: 'Strict quality control and safety compliance in all projects.',
                },
                {
                  title: 'Fast Service',
                  description: 'Quick response time and efficient project execution.',
                },
                {
                  title: 'Affordable Pricing',
                  description: 'Competitive rates without compromising on quality.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-foreground text-white py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 font-geist">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto font-geist">
              Contact us today for a consultation and quotation for your electrical project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition font-inter"
            >
              Contact
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
