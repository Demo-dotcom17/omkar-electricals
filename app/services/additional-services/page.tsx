import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SharedServiceSections } from '@/components/shared-service-sections'

export const metadata = {
  title: 'Additional Electrical Services - Omkar Electricals',
  description: 'Explore our comprehensive range of specialized additional services including solar installation, emergency services, lighting design, and more.',
}

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

        {/* Shared Sections (with additional services cards grid) */}
        <SharedServiceSections showAdditionalServices={true} />
      </main>
      <Footer />
    </>
  )
}
