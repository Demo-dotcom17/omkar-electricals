'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border">
      {/* Main navigation */}
      <nav className="px-4 font-inter" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
              <div className="absolute left-0 mt-0 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
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
              className="bg-accent text-accent-foreground px-6 py-2 rounded font-normal hover:opacity-90 transition"
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
            <div className="border-t border-border pt-2">
              <p className="text-foreground font-medium text-sm px-2 mb-2">Our Services</p>
              <Link
                href="/services"
                className="block text-foreground hover:text-accent font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                All Services
              </Link>
              <Link
                href="/services/residential-wiring"
                className="block text-foreground hover:text-accent font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                Residential Wiring
              </Link>
              <Link
                href="/services/commercial-installation"
                className="block text-foreground hover:text-accent font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                Commercial Installation
              </Link>
              <Link
                href="/services/industrial-electrical-work"
                className="block text-foreground hover:text-accent font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                Industrial Electrical Work
              </Link>
              <Link
                href="/services/maintenance-repair"
                className="block text-foreground hover:text-accent font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                Maintenance & Repair
              </Link>
              <Link
                href="/services/turnkey-projects"
                className="block text-foreground hover:text-accent font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                Turnkey Projects
              </Link>
              <Link
                href="/services/safety-compliance"
                className="block text-foreground hover:text-accent font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                Safety Compliance
              </Link>
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
