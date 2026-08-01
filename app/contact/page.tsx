'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MapPin } from 'lucide-react'
import { FAQAccordion } from '@/components/faq-accordion'

const faqItems = [
  {
    question: 'What services does Omkar Electricals provide?',
    answer: 'We provide residential, commercial, industrial, institutional, banking, and government electrical contracting services, including wiring, panel installation, cable laying, maintenance, testing, inspections, and turnkey electrical projects.',
  },
  {
    question: 'Are you a government licensed electrical contractor?',
    answer: 'Yes. Omkar Electricals is a government-licensed electrical contracting company in Maharashtra, delivering reliable electrical solutions since 2001.',
  },
  {
    question: 'What is the difference between an electrician and an electrical contractor?',
    answer: 'An electrician performs electrical installation and repair work, while an electrical contractor is a licensed professional responsible for planning, managing, supervising, and executing complete electrical projects in compliance with government regulations.',
  },
  {
    question: 'Which areas do you serve?',
    answer: 'We primarily serve Kolhapur, Pune, Mumbai, and other locations across Maharashtra based on project requirements.',
  },
  {
    question: 'Do you handle residential electrical work?',
    answer: 'Yes. We undertake complete residential electrical solutions including wiring, rewiring, panel installation, lighting, maintenance, and safety inspections.',
  },
  {
    question: 'Do you undertake commercial and industrial projects?',
    answer: 'Yes. We specialize in commercial buildings, industries, banks, educational institutions, hospitals, and government projects.',
  },
  {
    question: 'Do you provide turnkey electrical solutions?',
    answer: 'Yes. We manage complete turnkey projects from planning and design to installation, testing, commissioning, and maintenance.',
  },
  {
    question: 'Can you upgrade old electrical systems?',
    answer: 'Yes. We upgrade outdated electrical systems to improve safety, efficiency, and compliance with current electrical standards.',
  },
  {
    question: 'Do you provide emergency electrical services?',
    answer: 'Yes. Our team offers prompt emergency support to resolve electrical faults and minimize downtime.',
  },
  {
    question: 'Do you offer electrical inspections and safety audits?',
    answer: 'Yes. We conduct electrical inspections, safety audits, compliance checks, and testing to ensure your electrical systems operate safely and efficiently.',
  },
  {
    question: 'Can I request a quotation before starting a project?',
    answer: 'Absolutely. We provide free consultations and quotations based on your project requirements.',
  },
  {
    question: 'How can I contact Omkar Electricals?',
    answer: 'You can contact us through the Contact page, call us directly, send a WhatsApp message, or visit our office in Kolhapur.',
  },
  {
    question: 'Do you provide apprenticeship opportunities?',
    answer: 'Yes. We offer apprenticeship programs where candidates receive practical site experience under experienced professionals and receive an experience letter after successful completion.',
  },
  {
    question: 'How can I apply for a job at Omkar Electricals?',
    answer: 'Visit our Careers page to explore current openings or contact us directly with your resume.',
  },
]

export default function Contact() {

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="px-4" style={{ backgroundColor: 'rgb(18, 79, 198)', paddingTop: '50px', paddingBottom: '40px' }}>
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-medium mb-6" style={{ color: 'rgb(255, 255, 255)', fontFamily: '"Manrope", sans-serif' }}>
              You Have a <span style={{ color: 'rgb(255, 255, 255)' }}>Question?</span>
            </h1>
            <p className="text-2xl md:text-3xl font-normal" style={{ color: 'rgb(255, 255, 255)' }}>Let us Answer it.</p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 font-geist" style={{ paddingTop: '66px', paddingBottom: '96px' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Head Office */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src="/google-maps-pin.png"
                    alt="Location"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4" style={{ fontFamily: '"Manrope", sans-serif', fontWeight: '700' }}>Head Office</h3>
                <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                  Janwadkar Complex lower ground (LG-2), Panchaganga Hospital,
                  <br />
                  2116 Shukrawar Peth, Kolhapur (416002),
                  <br />
                  Maharashtra
                </p>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-lg shadow-sm border border-border" style={{ paddingTop: '82px', paddingLeft: '32px', paddingRight: '32px', paddingBottom: '32px' }}>
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center" style={{ fontFamily: '"Manrope", sans-serif', fontWeight: '700' }}>Quick Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-geist">
                  <a
                    href="tel:+917721027474"
                    className="bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded text-center transition"
                    style={{ fontWeight: '500', fontFamily: '"Inter", sans-serif' }}
                  >
                    CALL NOW
                  </a>
                  <a
                    href="https://wa.me/919209254245"
                    className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded text-center transition"
                    style={{ fontWeight: '500', fontFamily: '"Inter", sans-serif' }}
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>

            {/* Get Directions */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="flex items-center justify-center gap-3 mb-4 text-center">
                <span className="text-foreground font-bold" style={{ fontFamily: '"Manrope", sans-serif', fontSize: '20px' }}>GET DIRECTIONS</span>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2811%29-21TzetIXpvya2Yzvvn2OzcYiXmIQeH.png"
                  alt="Arrow"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <p className="text-gray-700 text-base mb-6 font-geist text-center">
                Click the button below to open our location in Google Maps and get turn-by-turn directions to Omkar Electricals.
              </p>
              <a
                href="https://maps.app.goo.gl/4Qx4ZTJsPG36AUD57"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded text-center transition font-geist"
              >
                OPEN IN GOOGLE MAPS
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 bg-background" style={{ paddingTop: '26px', paddingBottom: '96px' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#3266cc', fontFamily: '"Manrope", sans-serif', fontWeight: '600' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg font-geist">
                Find answers to common questions about Omkar Electricals Services
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4" style={{ fontFamily: '"Inter", sans-serif' }}>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
