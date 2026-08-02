import { Check } from 'lucide-react'

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature}
            className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default"
            style={{ borderColor: '#E5E7EB' }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 pt-0.5">
                <div className="flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: 'rgb(18, 79, 198)' }}>
                  <Check size={16} className="text-white" strokeWidth={3} />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-base font-medium text-foreground leading-relaxed">
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
