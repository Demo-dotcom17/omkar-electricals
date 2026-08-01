'use client'

import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border">
      {/* Main navigation */}
      <nav className="px-4" style={{ paddingTop: '5px', paddingBottom: '5px', fontFamily: '"Inter", sans-serif' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between" style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/omkar-logo-new.png" alt="Omkar Electricals" className="h-14 w-auto" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-14 font-normal">
            <Link href="/" className="text-foreground hover:text-accent transition">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition">
              About us
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-accent transition">
                Our Services
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 max-h-96 overflow-y-auto">
                <Link href="/services" className="block px-4 py-2 text-foreground hover:bg-background border-b border-border">
                  All Services
                </Link>
                <Link href="/services/residential-wiring" className="block px-4 py-2 text-foreground hover:bg-background">
                  Residential Wiring
                </Link>
                <Link href="/services/commercial-installation" className="block px-4 py-2 text-foreground hover:bg-background">
                  Commercial Installation
                </Link>
                <Link href="/services/industrial-electrical-work" className="block px-4 py-2 text-foreground hover:bg-background">
                  Industrial Electrical Work
                </Link>
                <Link href="/services/maintenance-repair" className="block px-4 py-2 text-foreground hover:bg-background">
                  Maintenance & Repair
                </Link>
                <Link href="/services/turnkey-projects" className="block px-4 py-2 text-foreground hover:bg-background">
                  Turnkey Projects
                </Link>
                <Link href="/services/safety-compliance" className="block px-4 py-2 text-foreground hover:bg-background">
                  Safety Compliance
                </Link>
                <Link href="/services/earthing-lightning-protection" className="block px-4 py-2 text-foreground hover:bg-background">
                  Earthing and Lightning Protection
                </Link>
                <Link href="/services/fire-protection-services" className="block px-4 py-2 text-foreground hover:bg-background">
                  Fire Protection Services
                </Link>
                <Link href="/services/data-cabling" className="block px-4 py-2 text-foreground hover:bg-background">
                  Data Cabling
                </Link>
                <Link href="/services/lt-cable-laying" className="block px-4 py-2 text-foreground hover:bg-background">
                  LT Cable Laying Services
                </Link>
                <Link href="/services/additional-services" className="block px-4 py-2 text-foreground hover:bg-background border-t border-border">
                  Additional Services
                </Link>
              </div>
            </div>
            <Link href="/area-of-work" className="text-foreground hover:text-accent transition">
              Area of Work
            </Link>
            <Link href="/careers" className="text-foreground hover:text-accent transition">
              Careers
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-accent-foreground px-6 py-2 rounded font-normal hover:opacity-90 transition"
              style={{ backgroundColor: 'rgb(18, 79, 198)' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/"
              className="block text-foreground hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            
            {/* Services Accordion */}
            <div className="border-t border-border pt-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-foreground hover:text-accent font-medium px-2 py-1 rounded transition"
                aria-expanded={isServicesOpen}
              >
                <span>Our Services</span>
                <ChevronDown
                  size={20}
                  className={`text-accent transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {/* Services Submenu */}
              <div
                className={`transition-all duration-300 ease-in-out relative ${
                  isServicesOpen ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
                style={{
                  maxHeight: isServicesOpen ? '60vh' : '0',
                }}
              >
                {/* Top fade indicator */}
                {isServicesOpen && (
                  <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                )}
                
                {/* Scrollable services list */}
                <div className="services-scroll pt-2 pb-2 space-y-1 overflow-y-auto overflow-x-hidden" style={{ maxHeight: 'calc(60vh - 12px)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <style>{`
                    .services-scroll::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  <Link
                    href="/services"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services/residential-wiring"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Residential Wiring
                  </Link>
                  <Link
                    href="/services/commercial-installation"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Commercial Installation
                  </Link>
                  <Link
                    href="/services/industrial-electrical-work"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Industrial Electrical Work
                  </Link>
                  <Link
                    href="/services/maintenance-repair"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Maintenance & Repair
                  </Link>
                  <Link
                    href="/services/turnkey-projects"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Turnkey Projects
                  </Link>
                  <Link
                    href="/services/safety-compliance"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Safety Compliance
                  </Link>
                  <Link
                    href="/services/earthing-lightning-protection"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Earthing and Lightning Protection
                  </Link>
                  <Link
                    href="/services/fire-protection-services"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Fire Protection Services
                  </Link>
                  <Link
                    href="/services/data-cabling"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Data Cabling
                  </Link>
                  <Link
                    href="/services/lt-cable-laying"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    LT Cable Laying Services
                  </Link>
                  <Link
                    href="/services/additional-services"
                    className="block text-foreground hover:text-accent font-medium pl-6 py-1 border-t border-border"
                    onClick={() => {
                      setIsOpen(false)
                      setIsServicesOpen(false)
                    }}
                  >
                    Additional Services
                  </Link>
                </div>
                
                {/* Bottom fade indicator */}
                {isServicesOpen && (
                  <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
                )}
              </div>
            </div>
            <Link
              href="/area-of-work"
              className="block text-foreground hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              Area of Work
            </Link>
            <Link
              href="/careers"
              className="block text-foreground hover:text-accent font-medium"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="block bg-accent text-accent-foreground px-4 py-2 rounded font-medium hover:opacity-90 transition w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get A Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
