import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceDetail } from '@/components/service-detail'
import { SharedServiceSections } from '@/components/shared-service-sections'
import { servicesData } from '@/lib/services-data'

export const metadata = {
  title: 'All Electrical Services - Omkar Electricals',
  description: 'Explore our comprehensive range of electrical services including residential wiring, commercial installation, industrial work, maintenance, turnkey projects, and safety compliance.',
}

const services = servicesData


export default function Services() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-geist">
              All Electrical Services
            </h1>
            <p className="max-w-2xl font-geist" style={{ fontSize: '17px', color: '#2c3036', textAlign: 'justify' }}>
              Omkar Electricals provides comprehensive electrical services for residential, commercial, governments, institutional and industrial projects. Our experienced team is equipped to handle any electrical challenge with expertise and professionalism.
            </p>
          </div>
        </section>

        {/* Premium Services Sections */}
        <div>
          {services.map((service, index) => (
            <ServiceDetail
              key={service.id}
              title={service.title}
              intro={service.intro}
              description={service.description}
              fullDescription={service.fullDescription}
              features={service.features}
              whyChoose={service.whyChoose}
              image={service.image}
              index={index}
            />
          ))}
        </div>

        {/* Shared Sections */}
        <SharedServiceSections />
      </main>
      <Footer />
    </>
  )
}
