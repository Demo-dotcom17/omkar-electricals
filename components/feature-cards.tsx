interface FeatureCardsProps {
  features: string[]
  title?: string
}

export function FeatureCards({ features, title = 'What We Provide' }: FeatureCardsProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-foreground mb-6 font-geist">
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ fontSize: '14px' }}>
        {features.map((feature) => (
          <div
            key={feature}
            className="border rounded-2xl p-6 transition-all duration-300 hover:border-accent cursor-default"
            style={{ borderColor: '#D1D5DB' }}
          >
            <div className="flex items-start gap-4">
              {/* Content */}
              <div className="flex-1">
                <p className="font-medium text-foreground leading-relaxed" style={{ fontSize: '14px', fontFamily: '"Inter", sans-serif' }}>
                  {feature}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
