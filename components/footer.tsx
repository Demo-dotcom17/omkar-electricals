'use client'

import Link from 'next/link'
import { Share2, Users, MessageSquare } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-8 font-geist">
        <div className="flex flex-col items-center text-center">
          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-8 md:gap-8 text-sm mb-6">
            <li>
              <Link href="/" className="text-gray-300 hover:text-accent transition">
                Home
              </Link>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-accent transition">
                About Us
              </Link>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <Link href="/services" className="text-gray-300 hover:text-accent transition">
                Services
              </Link>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <Link href="/careers" className="text-gray-300 hover:text-accent transition">
                Careers
              </Link>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-accent transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-gray-300 text-sm">© Omkar Electricals {currentYear}</p>
        </div>
      </div>
    </footer>
  )
}
