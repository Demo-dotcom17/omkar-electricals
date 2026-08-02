import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'About Omkar Electricals - Our Team & Values',
  description: 'Learn about Omkar Electricals, our team, vision, mission, and commitment to excellence in electrical services.',
}

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4" style={{ backgroundColor: 'rgb(18, 79, 198)' }}>
          <div className="max-w-7xl mx-auto">
            <p className="font-bold text-sm md:text-base mb-4 font-geist" style={{ color: 'rgb(255, 255, 255)', fontFamily: '"Manrope", sans-serif' }}>WHO WE ARE?</p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: 'rgb(245, 241, 235)', fontFamily: '"Manrope", sans-serif' }}>
              Want to Know a little <span style={{ color: 'rgb(255, 255, 255)', fontWeight: 600 }}>About us?</span>
            </h1>
            <p className="text-2xl md:text-3xl font-normal mb-8" style={{ color: 'rgb(245, 241, 235)' }}>Let us tell you.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="leading-relaxed mb-4 font-geist text-justify" style={{ color: 'rgb(255, 255, 255)' }}>
                  Omkar Electricals is a trusted government licensed electrical contracting and services company, delivering comprehensive electrical solutions across residential, commercial, industrial, and institutional sectors since 2001. Backed by a skilled and dedicated workforce, we are committed to exceeding client expectations by providing reliable, energy-efficient, and safe electrical systems. Our focus on quality, sustainability, innovation, and compliance with the highest safety standards enables us to create efficient and future-ready infrastructure for every project.
                </p>
              </div>
              <div className="relative h-80 md:h-96 w-full inline-flex items-center justify-center" style={{ backgroundColor: 'rgb(255, 255, 255)', gap: '0px', borderRadius: '0px' }}>
                <Image
                  src="/omkar-logo-new.png"
                  alt="Omkar Electricals Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto font-geist">
            <p className="mb-6 leading-relaxed text-justify" style={{ color: 'rgb(26, 26, 26)' }}>
              Omkar Electricals envisions being a flag-bearer for sustainable electrical solutions. We promote sustainability movement and create awareness about sustainable habitat by highlighting strategies.
            </p>

            <p className="mb-6 leading-relaxed text-justify border-l-4 pl-4" style={{ borderColor: 'rgb(18, 79, 198)', color: 'rgb(18, 79, 198)' }}>
              At present we are conducting the following programmes: the Energy Audit, Safety Audit, ISO - 9001, 14001, 45001, 50001 Audit and certification.
            </p>

            <p className="mb-8 leading-relaxed text-justify" style={{ color: 'rgb(26, 26, 26)' }}>
              We are also doing the Green building Certification with IGBC, GRIHA and ASSOCHAM GEM and Third Party commissioning.
            </p>

            <p className="leading-relaxed text-justify" style={{ color: 'rgb(26, 26, 26)' }}>
              Our current projects involve MEP design and build up for hospital, hotel, offices, homes, residential etc.
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="px-4 bg-secondary" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Vision */}
              <div>
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/vision-image.png"
                    alt="Our vision"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-foreground mb-4 font-geist" style={{ fontSize: '36px' }}>Our Vision</h3>
                <p className="text-gray-700 leading-relaxed font-geist">
                  To be the most respected sustainable design consultancy company for our clients and employees that embark on an everlasting legacy through sustainable design solutions and implementations.
                </p>
              </div>

              {/* Mission */}
              <div>
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/mission-image.png"
                    alt="Our mission"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-foreground mb-4" style={{ fontFamily: '"Geist", sans-serif', fontSize: '36px' }}>Our Mission</h3>
                <p className="text-gray-700 leading-relaxed font-geist">
                  Our consultancy serves clients with high standards of honesty, integrity, competence and objectivity. We work with the end in mind and strong ethics. We discourage any commissions, remuneration, or other benefits from any third party in connection with the recommendations to our clients. Respecting the individual&apos;s space and responsibility for balancing personal and professional life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 px-4" style={{ backgroundColor: 'rgb(255, 205, 69)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f5eWz4bLXtgsp6dzqDSJxSEmFLCO01.png"
                  alt="Our core values"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Values Content */}
              <div className="font-geist text-justify">
                <h2 className="text-2xl md:text-3xl font-medium mb-8" style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 600, fontSize: '36px', color: 'rgb(26, 26, 26)' }}>Values</h2>

                <ul className="space-y-4" style={{ fontSize: '17px' }}>
                  {[
                    'Have business dealings conducted with the highest standards of honesty, integrity, competence, and objectivity.',
                    'Have high business ethics and discourage any commissions, remuneration, or other benefits from any third party in connection with the recommendations to our client.',
                    'Respect the individual\'s responsibility for balancing personal and professional life.',
                    'Commit to personal growth within a stable, rewarding & friendly working environment.',
                    'Seek opportunities to work for worthy causes within our communities.',
                  ].map((value, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="font-bold text-xl" style={{ color: 'rgb(26, 26, 26)' }}>•</span>
                      <span style={{ color: 'rgb(26, 26, 26)' }}>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
