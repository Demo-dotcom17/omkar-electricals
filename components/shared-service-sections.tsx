import { BrandCarousel } from '@/components/brand-carousel'

interface SharedServiceSectionsProps {
  showAdditionalServices?: boolean
}

export function SharedServiceSections({ showAdditionalServices = false }: SharedServiceSectionsProps) {
  return (
    <>
      {/* Additional Services */}
      {showAdditionalServices && (
        <section className="bg-secondary py-16 md:py-24 px-4">
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
                <h3 className="text-xl text-foreground mb-3" style={{ fontWeight: '500' }}>{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Trusted Brands & Partners */}
      <BrandCarousel />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: '#ffcd45' }}>
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
                <p style={{ color: 'rgb(26, 26, 26)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-white py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6" style={{ fontFamily: '"Manrope", sans-serif', letterSpacing: '0em' }}>
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto font-geist">
            Contact us today for a consultation and quotation for your electrical project.
          </p>
          <a
            href="/contact"
            className="inline-block text-accent-foreground px-8 py-3 rounded font-medium hover:opacity-90 transition font-inter"
            style={{ backgroundColor: 'rgb(18, 79, 198)' }}
          >
            Contact
          </a>
        </div>
      </section>
    </>
  )
}
