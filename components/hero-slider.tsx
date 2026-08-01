'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  image: string
  alt: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VOTJmvrBe6dCu1NdpKKBUsNSDYwQDL.png',
    alt: 'Industrial electrical switchboard panel with control systems',
  },
  {
    id: 2,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gKRc2EJPjERdhXh3VdgUzMjwcZhynB.png',
    alt: 'Professional data center cabling infrastructure',
  },
  {
    id: 3,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vYITaGTA4gN6Zi2xTpoZTmFpbBd1GJ.png',
    alt: 'Thermal imaging diagnosis of industrial control system',
  },
  {
    id: 4,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xVm5LGcFXGKJOolINs5UECI0sH5eZn.png',
    alt: 'Fire protection sprinkler system installation',
  },
  {
    id: 5,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OIdQ9Vr9mY6QeV5YBsUr2gtig5DjzW.png',
    alt: 'Residential electrical wiring and socket installation',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [isAutoplay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.clientX || e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.clientX || e.changedTouches[0].clientX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Dark Overlay */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />

            {/* Content - Vertically Centered, Left Aligned */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="w-full px-4 md:px-8">
                {/* Left Content Only */}
                <div
                  className={`text-white transition-all duration-700 max-w-[650px] ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                >
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Powering Your World
                    </h1>

                    <p className="text-lg md:text-xl font-medium text-blue-300">
                      Government Licensed Electrical Contractors
                    </p>

                    <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                      Delivering trusted electrical contracting services across Maharashtra since 2001. We specialize in residential, commercial, industrial, government, and infrastructure electrical projects with a commitment to safety, quality, and timely execution.
                    </p>

                    {/* Buttons - Stack on mobile, side-by-side on desktop */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Link
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 text-center sm:w-auto"
                      >
                        Get a Quote
                      </Link>
                      <Link
                        href="/services"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 text-center sm:w-auto"
                      >
                        Explore Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-500 w-8'
                : 'bg-white/40 hover:bg-white/60 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white text-sm font-medium">Scroll Down</p>
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
