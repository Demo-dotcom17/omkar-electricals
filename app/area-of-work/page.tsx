'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SuccessPieChart } from '@/components/success-pie-chart'

export default function AreaOfWork() {
  const sectors = [
    {
      name: 'Institutional',
      description: 'We have successfully executed electrical projects for educational institutions, delivering safe, reliable, and energy-efficient electrical systems for schools, colleges, universities, and training campuses. Our solutions ensure uninterrupted power supply, modern infrastructure, and compliance with the highest safety standards, creating secure and efficient learning environments.',
      logos: [
        {
          name: 'Kolhapur Institute of Technology',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2821%29-4uP2W6bSzWpCGfAknnUTN6o4Y9YIbz.png',
        },
        {
          name: 'Vivekanand College',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2832%29-ubHyOh913adHHmtcq1K0q5Ey3LqEKc.png',
        },
        {
          name: 'Podar International School',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2834%29-FwmxX1ST5SmqjTHJelYRwI9HRxih1T.png',
        },
      ],
    },
    {
      name: 'Banking',
      description: 'We have successfully executed electrical projects for leading banks and financial institutions, delivering reliable power distribution systems, backup power solutions, and energy-efficient electrical infrastructure. Our services ensure uninterrupted operations, enhanced safety, and compliance with the highest industry standards.',
      logos: [
        {
          name: 'Bank of Baroda',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2823%29-d4Jp0nG8Lpf2J3hO8uJg1kK3mWKpcI.png',
        },
        {
          name: 'Bank of Maharashtra',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2824%29-xeit5BiZjj01v51F48nwfJx5HBVwBd.png',
        },
        {
          name: 'Union Bank of India',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2826%29-Tb4JNnVM4F8aqaut3v1G2QuALkf9fN.png',
        },
        {
          name: 'Bank of India',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2828%29-XbAFaMBbMP8wPo5eERZOGiRJDLkJyB.png',
        },
        {
          name: 'Central Bank of India',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2827%29-Ip8oDfL2oE33qFwF1H69k6DThcm0vc.png',
        },
      ],
    },
    {
      name: 'Developers & Real Estate',
      description: 'We collaborate with leading builders and developers to provide turnkey electrical solutions for residential, commercial, and integrated township projects. From electrical planning and installation to testing and commissioning, we deliver reliable, energy-efficient, and future-ready infrastructure tailored to every development.',
      logos: [
        {
          name: 'SAI Developers & Builders',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2825%29-3Npfhmrv3PIgxWsDNxSqAM5QsTPEjS.png',
        },
        {
          name: 'Vishwakarma Builders',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qgAgLq2NjnU3kgzl58fBWvIfBFJOSx.png',
        },
        {
          name: 'SD Associates',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2829%29-4MJKNcCWO7nAmUaS4Mbss8RW9MXWBO.png',
        },
        {
          name: 'DR Construction',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2831%29-jln2gvMWnjEGGroJROxiqmcJrKkOIT.png',
        },
        {
          name: 'VGA Construction',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2830%29-bSHjECfTDu2DYmsFOEfMJVT6URiwVu.png',
        },
      ],
    },
    {
      name: 'Utility & Government Projects',
      description: 'We provide end-to-end power distribution infrastructure solutions for utilities, government bodies, industrial facilities, and commercial developments. Our expertise includes installation, testing, commissioning, and maintenance of LT/HT electrical networks, transformers, switchgear, substations, and underground/overhead cable systems. Every project is executed in accordance with Indian electrical standards, ensuring reliable, safe, and efficient power distribution.',
      logos: [
        {
          name: 'MAHAVITARAN',
          url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2833%29-2WyXF2fXORcIuAPjL3vokKSRMkLmyV.png',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 px-4" style={{ backgroundColor: 'rgb(18, 79, 198)' }}>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: 'rgb(255, 255, 255)', fontFamily: '"Manrope", sans-serif' }}>
              Area of <span style={{ color: 'rgb(255, 255, 255)' }}>Work</span>
            </h1>
            <p className="text-lg max-w-8xl font-geist" style={{ color: 'rgb(255, 255, 255)' }}>
              Our expertise spans across a wide range of sectors, where we have successfully completed numerous electrical projects for industrial facilities, banking institutions, commercial buildings, residential developments, hospitals, educational institutions, hospitality establishments, and real estate projects. We are committed to delivering safe, reliable, and high-quality electrical solutions that meet the highest industry standards.
            </p>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-16 md:py-24 px-4" style={{ paddingBottom: '6px' }}>
          <div className="max-w-7xl mx-auto">
            {sectors.map((sector) => (
              <div key={sector.name} className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4 font-geist">
                  {sector.name}
                </h2>
                <p className="text-lg text-gray-700 mb-12 max-w-7xl font-geist">
                  {sector.description}
                </p>

                {/* Logos Display */}
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
                  {sector.logos.map((logo) => (
                    <div
                      key={logo.name}
                      className="group transition-all duration-300 hover:scale-110"
                    >
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="h-auto max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Pie Chart Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-medium text-foreground mb-12 text-center" style={{ fontFamily: '"Manrope", sans-serif' }}>
              As of July 2026, <span className="text-accent">We Are Proudly Serving</span>
            </h2>
            <SuccessPieChart />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl px-6 md:px-10 py-8 md:py-10" style={{ backgroundColor: '#FFD957' }}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                {/* Stat 1 */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-medium mb-2" style={{ color: '#1F2937', fontFamily: '"Manrope", sans-serif' }}>700+</h3>
                  <p className="text-lg md:text-xl font-inter" style={{ color: '#1F2937' }}>Happy Clients</p>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-medium mb-2" style={{ color: '#1F2937', fontFamily: '"Manrope", sans-serif' }}>255+</h3>
                  <p className="text-lg md:text-xl font-inter" style={{ color: '#1F2937' }}>Locations</p>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-medium mb-2" style={{ color: '#1F2937', fontFamily: '"Manrope", sans-serif' }}>970+</h3>
                  <p className="text-lg md:text-xl font-inter" style={{ color: '#1F2937' }}>Projects</p>
                </div>

                {/* Stat 4 */}
                <div className="text-center">
                  <h3 className="text-5xl md:text-6xl font-medium mb-2" style={{ color: '#1F2937', fontFamily: '"Manrope", sans-serif' }}>45+</h3>
                  <p className="text-lg md:text-xl font-inter" style={{ color: '#1F2937' }}>Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent text-white px-4" style={{ paddingTop: '3px', paddingBottom: '3px' }}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6" style={{ fontFamily: '"Manrope", sans-serif' }}>
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-geist">
              Join the trusted organizations that rely on Omkar Electricals for their electrical infrastructure needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-accent px-8 py-3 rounded font-medium hover:bg-gray-100 transition font-geist"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
