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
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${imageFirst ? 'md:grid-flow-dense' : ''}`}>
          {/* Image */}
          <div className={`${imageFirst ? 'md:col-span-5' : 'md:col-start-8 md:col-span-5'} order-2 ${imageFirst ? 'md:order-1' : 'md:order-2'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-96 md:h-[520px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${imageFirst ? 'md:col-span-7' : 'md:col-span-7'} order-1 ${imageFirst ? 'md:order-2' : 'md:order-1'}`}>
            <div className="space-y-6">
              <p className="text-base text-foreground leading-relaxed font-geist">
                {description}
              </p>
              <p className="text-base text-foreground leading-relaxed font-geist">
                {fullDescription}
              </p>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 font-geist">
                  What We Provide
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3 items-start font-geist">
                      <span className="text-accent font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-base text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="/contact"
                  className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition font-geist"
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
