import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 mr-1 ${i < count ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export function CustomerReviews() {
  const { t } = useTranslation('home')
  const reviews = t('customerReviews.reviews', {
    returnObjects: true,
  }) as { name: string; content: string }[]

  return (
    <section className="py-4 px-6 md:px-12 bg-white">
      <div className="text-center mb-12">
        <Heading level={1} className="mb-2">
          {t('customerReviews.title')}
        </Heading>
      </div>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg flex-shrink-0"
              style={{ width: '350px', minWidth: '350px' }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="/assets/images/profile/placeholder.png"
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <div>
                  <Heading level={4} className="font-semibold">
                    {review.name}
                  </Heading>
                  <StarRating count={5} />
                </div>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export { CustomerReviews as default }
