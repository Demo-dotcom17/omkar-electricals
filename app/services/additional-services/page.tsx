import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceDetail } from '@/components/service-detail'
import { getAdditionalServices } from '@/lib/services-data'

export const metadata = {
  title: 'Additional Electrical Services - Omkar Electricals',
  description: 'Explore our specialized additional services including earthing and lightning protection, fire protection systems, data cabling, and LT cable laying services.',
}

const services = getAdditionalServices()

export default function AdditionalServices() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-geist">
              Additional Services
            </h1>
            <p className="max-w-2xl font-geist" style={{ fontSize: '17px', color: '#2c3036', textAlign: 'justify' }}>
              Beyond our primary electrical services, Omkar Electricals offers specialized solutions including earthing and lightning protection systems, comprehensive fire protection services, structured data cabling, and professional LT cable laying. These specialized services ensure complete infrastructure safety and modern connectivity.
            </p>
          </div>
        </section>

        {/* Additional Services Sections */}
        <div>
          {services.map((service, index) => (
            <ServiceDetail
              key={service.id}
              title={service.title}
              intro={service.intro}
              description={service.description}
              fullDescription={service.fullDescription}
              features={service.features}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
