import React from 'react'
import Image from 'next/image'
import { FeatureCards } from './feature-cards'

interface ServiceDetailProps {
  title: string
  intro: string
  description: string
  fullDescription: string
  features: string[]
  image: string
  index?: number
}

export function ServiceDetail({
  title,
  intro,
  description,
  fullDescription,
  features,
  image,
  index = 0,
}: ServiceDetailProps) {
  const imageFirst = index % 2 !== 0

  return (
    <section className="bg-background py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout - Flex column for proper reordering */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Content - Title, Description, Image on mobile */}
          <div className="space-y-6">
            <p className="text-base text-foreground leading-relaxed font-geist">
              {description}
            </p>
            <p className="text-base text-foreground leading-relaxed font-geist">
              {fullDescription}
            </p>
          </div>

          {/* Mobile Image - Appears after description */}
          <div className="relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Features - Using modern card layout */}
          <div className="pt-2">
            <FeatureCards features={features} />
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition font-inter"
              style={{ backgroundColor: 'rgb(18, 79, 198)' }}
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Original grid layout */}
        <div className={`hidden md:grid grid-cols-12 gap-8 md:gap-12 items-center ${imageFirst ? 'grid-flow-dense' : ''}`}>
          {/* Image */}
          <div className={`${imageFirst ? 'md:col-span-5' : 'md:col-start-8 md:col-span-5'} ${imageFirst ? 'order-1' : 'order-2'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${imageFirst ? 'md:col-span-7' : 'md:col-span-7'} ${imageFirst ? 'order-2' : 'order-1'}`}>
            <div className="space-y-6">
              <p className="text-base text-foreground leading-relaxed font-geist">
                {description}
              </p>
              <p className="text-base text-foreground leading-relaxed font-geist">
                {fullDescription}
              </p>

              {/* Features - Using modern card layout */}
              <div className="pt-2">
                <FeatureCards features={features} />
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-block text-accent-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition font-inter"
                  style={{ backgroundColor: 'rgb(18, 79, 198)' }}
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
