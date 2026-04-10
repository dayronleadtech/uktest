import { useTranslation } from 'react-i18next'

/** Placeholder for step 2 — extend when building the full wizard. */
export default function ApplicationYourInfoPage() {
  const { t } = useTranslation('application')

  return (
    <div className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-[#001a33] mb-2">{t('steps.yourInfo')}</h1>
        <p className="text-[#6c757d]">This step will be added in a follow-up.</p>
      </div>
    </div>
  )
}
