import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceDetail } from '@/components/service-detail'
import { SharedServiceSections } from '@/components/shared-service-sections'
import { servicesData, getServiceBySlug } from '@/lib/services-data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-background py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 font-geist">
              {service.title}
            </h1>
            <p className="max-w-2xl font-geist" style={{ fontSize: '17px', color: '#2c3036', textAlign: 'justify' }}>
              {service.intro}
            </p>
          </div>
        </section>

        {/* Service Detail Section */}
        <ServiceDetail
          title={service.title}
          intro={service.intro}
          description={service.description}
          fullDescription={service.fullDescription}
          features={service.features}
          image={service.image}
          index={0}
        />

        {/* Shared Sections (without additional services cards for primary services) */}
        <SharedServiceSections showAdditionalServices={false} />
      </main>
      <Footer />
    </>
  )
}
